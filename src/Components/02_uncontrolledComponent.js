/**
 * 非受控表单组件
 *   非受控组件 - 通过手动操作DOM的方式获取文本框的值
 *              文本框的状态不受react组件的state控制
 */

// 1. 导入createRef函数
import React, { createRef } from "react"

class TestComponents extends React.Component {
  // 2. 调用createRef函数来创建ref实例对象, 并存到实例属性myMsg中
  myMsg = createRef()

  // 5. 定义onClick回调函数
  // 通过ref实例对象的current属性拿到文本框对应的DOM元素
  // 再通过其value属性获取文本框的值
  getMsg = () => {
    console.log(this.myMsg.current.value)
  }

  render () {
    // 3. 给输入框的ref属性, 绑定实例属性myMsg
    // 4. 给按钮绑定onClick事件
    return (
      <>
        <input
          type='text'
          ref={this.myMsg}
        />
        <button onClick={this.getMsg}>Submit</button>
      </>
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
