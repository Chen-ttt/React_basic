/**
 * 受控表单组件
 *   受控组件 - 被react的状态控制的组件
 */
import React from "react"

// 实现一个接收用户输入, 且实时变化的输入框
class TestComponents extends React.Component {
  // 1. 声明用来控制组件的状态数据
  state = {
    msg: 'Hello'
  }

  // 4. 定义onChange事件的回调函数
  changeMsg = (e) => {
    console.log(e)
    // 5. 通过e.target.value是当前输入框的最新值, 并更新state
    this.setState({
      msg: e.target.value
    })
  }

  render () {
    // 2. 给输入框的value属性绑定state
    // 3. 给输入框绑定onChange事件 以拿到用户的输入
    return <div>
      <input
        type='text'
        value={this.state.msg}
        onChange={this.changeMsg}
      />
    </div>
  }
}


function App () {
  return ( // JSX
    <div className="App">
      <TestComponents />
    </div>
  )
}

export default App
