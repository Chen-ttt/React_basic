/**
 * 组件状态
 *  初始化状态 -> 视图读取初始状态 -> 修改状态 -> 视图使用新状态自动更新
 *  Note.在react hook出来之前, 函数组件是没有自己的状态的
 */
import React from "react"

class TestComponents extends React.Component {
  // 1. 定义组件状态
  //    实例属性state, 是对象, 当前组件的各种状态都在对象内以属性的形式被定义
  state = {
    name: 'Tong',
    age: 18
  }

  // 3. 事件回调函数 - 通过此函数修改组件状态
  // 核心!!! 数据驱动视图, 只要修改数据, 页面会自动刷新, 无需手动操作DOM
  addAge = () => {
    // 注意! 不可以直接用赋值语句修改state中的属性, 必须通过setState({要求改的部分数据})
    // setState方法的作用 - a.修改state中的部分数据; b.更新UI
    this.setState({
      age: this.state.age + 1 // 直接取age是取不到的, 必须通过this.state
    })
  }

  render () {
    // 2. 使用状态 - 通过this.state.属性名
    return (
      <div>
        This is a class component.
        <br></br>
        当前姓名为: {this.state.name}
        <br></br>
        当前年龄: {this.state.age}
        <button onClick={this.addAge}> Add Age</button>
      </div>
    )
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
