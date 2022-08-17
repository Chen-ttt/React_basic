/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 15:33:50
 * @LastEditTime: 2022-08-16 17:29:29
 * @LastEditors:  
 */

/**
 * 1. store 存放数据的仓库
 *    store = createStore(reducer)
 * 
 * 2. state 存在store仓库中的数据
 *    通过store.getState()可以读取数据值
 * 
 * 3. action 可以直接写成一个对象, 也可以写一个返回action对象的函数
 *    action = {
 *       type: 'ADD_ONE', // 描述要执行的动作
 *       num: 1
 *    }
 * 
 * 4. dispatch 唯一的更改state的方法
 *    store.dispatch(action)
 * 
 * 5. reducer 规定了state默认值和修改state的方法; 根据action中的type, 做出不同的修改动作
 *    reducer = (state = 10, action) => {...}
 *    每次store.getState都将执行一次reducer方法
 * 
 * // 实现数据UI响应
 * 6*. subscribe 监听数据, 一旦数据变化, 就重新调用渲染函数(但很麻烦, 不常用)
 *    store.subscribe(function(){}）
 * 
 * 7. connect 将组件和store连接在一起, 见container.js
 */
import { Provider } from 'react-redux'
import Container from './components/container'
import store from './store/store'

// test
// 每一次通过getState查看数据时, 都会执行一次reducer函数
// console.log(store.getState())
// dispatch返回的是传入的action
// console.log(store.dispatch(addAction(1)))
// console.log(store.getState())
// console.log(store.dispatch(squareAction()))
// console.log(store.getState())

function App () {
  return (
    // 将store传递给Container组件
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

/**
 * 展示组件 - 负责UI部分
 * 容器组件 - 负责管理数据和业务逻辑
 */

export default App