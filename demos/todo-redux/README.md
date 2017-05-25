# TodoList
通过这个 DEMO，可以初步了解如何通过 React + Redux 来构建一个单页面应用。
本 DEMO 只是简单的介绍如何使用，非常浅显。

之前在 Todo-Mobx 中介绍了 [React](https://github.com/Hunter-Gu/TodoList/tree/master/demos/todo-mobx#react) 的相关基础知识，这里不再重复。下面会主要陈述如何简单实用 Redux。

## [Redux](#redux)
### 展示组件
React 的无状态组件，state 从redux 中来，通过 React-Redux 的 connect 将 state 注入到 props 中，得到容器组件。

### 容器组件
得到 state 值的 无状态组件，现在 state 值注入到了 props 中（相当于 Object.assign(this.props, state)）
 - mapStateToProps
 将 state 注入 props，并在 state 与 props 之间建立对应关系。
 ```
 let mapStateToProps = (state) => {
   return {
     text: state.text, // props.text <------> state.text
     name: state.name // props.name <------> state.name
   }
 }
 ```
 - mapDispatchToProps
 返回的对象都是函数。主要是通过 dispatch(action) 来分发 action，每次调用 dispatch(action) 都会触发 reducer 函数的执行，从而修改 state。并且和上述 mapStateToProps 相同，会将函数注入 props 中，方便在组件中调用。
 并将
 let mapDispatchToProps = (dispatch) => {
   return {
     // 注入 props 中，props.handlerChange 就可以调用到该函数
     handlerChange () {

     }
   }
 }
 - connect
 - reducer


