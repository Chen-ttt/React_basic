/**
 * Hooks - useRef
 * 获取真实的dom对象(标签)或组件实例(只能指的是类组件)
 * 
 * 1. 导入useRef函数
 * 2. 执行useRef并传入null参数, 返回值为一个对象
 * 3. 在dom标签或组件实例中的ref属性中, 将useRef返回的对象绑定
 * 4. 通过返回的对象.current属性获取dom或组件实例
 */

import React, { useEffect, useRef } from "react"

class Test extends React.Component {
  render () {
    return <div>I'm class component</div>
  }
}

function App () {
  const testRef = useRef(null) // 传入null
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current) // current属性存放组件Test实例
    console.log(h1Ref.current) // current属性存放dom
  }, [])

  return (
    // 绑定
    <div className="App">
      <Test ref={testRef} />
      <h1 ref={h1Ref}>I'm label</h1>
    </div>
  )
}

export default App
