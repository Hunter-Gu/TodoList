# Todo-list
这是一个用来初步了解如何通过 React + Mobx 构建应用的 DEMO，通过 Webpack 进行打包。
技术栈： React + Mobx + React-Mobx + SCSS。
由于刚接触 React 不久，写的不好或者有误还请指出，万分感谢。

## Webpack
我对 Webpack 了解的很少，甚至要我自己进行配置也是非常大的困难，所以这里只进行一些最基础的概述。下面是一个最基本的 Webpack 配置文件：
```
module.exports = {
  // 这里是 js 代码的入口文件
  // 程序从该文件开始打包
	entry: './src/index.js',
  // 出口，指出文件如何打包，以及打包后输出到哪里
  output: {
    // 打包后的文件名为 bundle.js
    // bundle.js 会输出到当前目录的 src 路径下
    path: path.join(__dirname, './src'),
    filename: './src/bundle.js',
  },
  // 插件，拓展 Webpack 的功能
  // Plugins 都需要通过 npm 安装
  plugins: [
    // 该文件会自动引用打包生成的 bundle.js
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    // Webpack 打包成功后会自动帮你打开一个浏览器标签
    new OpenBrowserPlugin({
      url: 'http://localhost:3500'
    }),
    // 
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: process.env.NODE_ENV === "development"
    })
  ],
  module: {
    // module.loaders 用来连接加载器
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // 启动一个简单的 node 服务器
  devServer: {
    compress: true,
    port: 3500
  }
}
```

## React
React 是一个用于构建用户界面的 JavaScript 框架，也就是说 React 是一个 UI 框架，他把重点放在了 MVC 中的 V(View) 层上。

### 声明组件
React 可以通过 ES6 的 [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 来声明一个自定义组件，该组件继承基类 React.Component 的所有属性和方法。
```
class MyComponent extends React.Component {
  render () {
    return (
      // jsx
    )
  }
}
```
这里有几点要强调的地方：
 - 1.原生 HTML 标签以小写开头，自定义 React 组件的首字母要大写。
 - 2.JSX 语法很类似 XML，它不是必须的，但我觉得用它来编程很方便。
 - 3.组件内的 render 函数是必须的，它返回一颗组件树，最终会被渲染成 HTML。

### 挂载虚拟 DOM
实例化根组件，启动框架，将虚拟的 DOM 节点挂载到真实的 DOM 节点。
```
ReactDOM.render(jsx, DOM)
```

### React 组件的状态
```
class MyComponent extends React.Component {
  constructor (...arg) {
    super(...arg)
    // 定义组件的初始状态
    this.state = {
      //...
      name: 'Couzin'
    }
  }
  handlerClick () {
    // 调用后触发重新渲染
    this.setState = {
      name: 'HUnter'
    }
  }
  render () {
    return (
      <div>
        <button
          onClick="this.handlerClick.bind(this)
        >click</button>
      </div>
    )
  }
}
```
state 是组件私有的，可以通过 setState 来修改 state，并且触发 View 的重新渲染。

### 传递 props
当一个组件依赖父组件中的数据时，就需要用 props 来传递数据了。
```
class Father extends React.Component {
  render () {
    return (
      <div>
        {/* ... */}
        <Child author="HUnter" />
      </div>
    )
  }
}
class Child extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.author}</p>
      </div>
    )
  }
}
```
子组件中通过 this.props 就可以拿到 props 上的数据了，实现了从 父组件 ------> 子组件的数据传递。
另外再提及一下 this.props.children：
```
class Father extends React.Component {
  render () {
    return (
      <div>
        {/* ... */}
        <Child author="HUnter">
          <h1>hello world</h1>
        </Child>
      </div>
    )
  }
}
class Child extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.author}</p>
        {this.props.children}
        {/* 相当于<h1>hello world</h1> */}
      </div>
    )
  }
}
```
也就是说 this.props.children 就是组件内嵌套的元素。

了解了上面的这些使用方法，差不多就可以开始简单的使用 React 了。


## Mobx
Mobx 是一个状态管理工具，它可以把你的应用变为响应式。
Mobx 提供状态给 React 使用，下面有一些概念

### observable state （可观察状态）
Mobx 为现有数据结构添加了可观察的功能，只需要通过 @observable 这个装饰器就可以使你的属性变为可观察的。
```
class MyStore {
  @observable myName = 'hunter'
}
```

### derivation （衍生）
任何源自 state 并且不会再有进一步相互作用的东西就是衍生。Mobx 有两种类型的衍生：
 - computed values 从当前可观察状态中衍生出的值。
 - reactions 当前状态改变时要发生的副作用。

#### computed values
当相关数据变化时会自动更新。通过 @computed 装饰器调用的 setter／getter 函数进行使用。
```
class MyStore {
  @observable myName = 'HUnter'

  @computed get getNameLength () {
    return this.myName.length
  }
}
```

#### reactions
reactions 与 computed values 相比起来使用较少，它是当前状态改变所触发的副作用。

### actions （动作）
只有在 actions 中，才可以修改 Mobx 中 state 的值。注意当你使用装饰器模式时，@action 中的 this 没有绑定在当前这个实例上，要用过 @action.bound 来绑定 使得 this 绑定在实例对象上。
```
@action.bound setName () {
  this.myName = 'HUnter'
}
```

actions ------> state ------> view

## Mobx-React
上面简单介绍了 Mobx 的使用，我们知道当 React 组件中 state 变化后，要通过 setState 来触发视图的更新，Mobx 中定义了 React 组件中的 state 以及如何修改 state，那么怎么在 state 改变后触发视图的更新呢？Mobx-React 提供了 observer 将 React 组件的转变为响应式组件，确保 state 改变时可以强制刷新组件。做法很简单：
```
@observer
class MyComponent extends React.Component {
  // ...
}
```

## React + Mobx 使用的步骤
- 1.定义 observable state
```
class Store {
  @observable data = []

  // @computed ...

  // @action ...
}
```
- 2.创建视图
通过 React 创建视图时，推荐创建无状态组件，即组件内没有内部的 state 和 生命周期函数。理想情况下，大部分组件都应该是无状态组件，仅通过 props 获得数据。
```
@observer
class MyComponent extends React.Component {

}
```
- 3.通过调用 Mobx 中的 actions 改变状态。
```
@observer
class MyComponent extends React.Component {
  render () {
    let store = { this.props }
    return (
      <div>
        <input onChange={store.setName} /> 
      </div>
    )
  }
}
```

上面大致讲了如何简单使用 React + Mobx 来实现一个简单的应用，描述的比较浅显。
