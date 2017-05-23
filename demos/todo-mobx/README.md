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

### 挂载虚拟 DOM


