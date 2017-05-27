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
 ```
 let mapDispatchToProps = (dispatch) => {
   return {
     // 注入 props 中，props.handlerChange 就可以调用到该函数
     handlerChange (e) {
       return dispatch({
         type: 'CHANGE',
         text: e.target.value // 通过 action 传递的值
       })
     }
   }
 }
 ```
 或者你可以把 action 抽象出 action 创建函数，每次都返回一个 action 对象。
 ```
 let addTodoAction = (text) => {
   return {
     type: 'CHANGE',
     text
   }
 }
 let mapDispatchToProps = (dispatch) => {
   return {
     // 注入 props 中，props.handlerChange 就可以调用到该函数
     handlerChange (e) {
       return dispatch(addTodoAction(text))
     }
   }
 }
 ```
 - reducer
 前面说过了，我们每次通过 dispatch(action) 分发 action，就会触发 reducer 函数的调用，以达到修改 state 的目的。所以 reducer 就是一个纯函数，reducer 的功能就是返回初始或修改后的 state 对象。
 ```
 let reducer = (state = {
   text: 'hello',
   name: 'world'
 }, action) => {
  switch (action.type) {
    case: 'CHANGE':
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
 }
 ```
 我们在 reducer 里面定义了 state 的初始值，以及当 触发 'CHANGE' 这个 action 时如何修改 state。我们在这里使用了 Object.assign 来返回一个 state 的副本，我们不希望修改 state 的值，因为 在 default 情况下，我们需要返回原来的 state 来处理未知 action。
 当代码冗长时，还可以拆分 reducer 函数，最后再通过 combineReducers 将子 reducer 合并成一个主 reducer。
 - connect


