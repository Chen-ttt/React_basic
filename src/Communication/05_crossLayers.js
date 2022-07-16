/**
 * 跨层通信
 *   在react嵌套组件树中, 如果需要从父组件传递数据给子组件的...的子组件, 就涉及到跨层传递
 *   技术方案: 使用Context机制解决, 它提供了一个无需为每个组件手动添加props, 就能在组件树之间进行传递的方法
 *    1. 导入createContext并调用, 以生成context对象
 *       (可以将context解构成ProviderConsumer)
 *    2. 发送方用Provider包裹根组件 提供数据
 *    3. 接收方用Consumer包裹组件 获取数据
 *   
 * 例. Father -> A -> C
 *     Father发送, C接收
 */

import React, { createContext } from "react"

// 1. 调用createContext, 得到Provider和Consumer
const { Provider, Consumer } = createContext()

function ComA () {
  return (
    <div>
      This is A.
      <ComC />
    </div>
  )
}

function ComC () {
  // 3. 在接收方, 需要用到数据的组件中, 用Consumer包裹箭头函数
  // 用value获取数据, 再在箭头函数中进行相应的操作
  return (
    <div>
      This is C. I'm receiving...:
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class Father extends React.Component {
  state = {
    msg: 'Hello'
  }


  render () {
    // 2. 在发送方, 用Provider包裹组件, 将要发送的数据绑定在value属性上
    return (
      <Provider value={this.state.msg}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }
}


function App () {
  return ( // JSX
    <div className="App">
      <Father />
    </div>
  )
}

export default App
