/**
 * Hooks - useEffect清除副作用
 * 在useEffect中返回一个回调函数, 并在此函数中写清除副作用的代码
 */

import { useState, useEffect } from "react"

function Test ({ msg }) {
  // 特别说明: 将useEffect写在这里的效果和写在App里完全不一样
  // Test中并没有useState状态, 因此这个useEffect只会在Test组件首次渲染时执行一次
  // 因此, App中的flag为true时, Test组件首次渲染, useEffect调用一次
  // flag变为false, Test组件被销毁, 不执行useEffect
  useEffect(() => {
    console.log("执行Test")
  })
  return <div>{msg}</div>
}

function TestTimer ({ msg }) {
  useEffect(() => {
    console.log("设定TestTimer")
    let timer = setInterval(() => {
      console.log("执行timer")
    }, 1000)
    // return回调函数
    return () => {
      // 清除副作用
      console.log("销毁定时器")
      clearInterval(timer)
    }
  })

  return <div>{msg}</div>
}

function App () {
  const [flag, setFlag] = useState(true)
  const [flagTimer, setFlagTimer] = useState(true)

  return ( // JSX
    <div className="App">
      {flag ? <Test msg={"I'm appear"} /> : null}
      <button onClick={() => setFlag(!flag)}>Switch</button>

      {flagTimer ? <TestTimer msg={"Timer set"} /> : null}
      <button onClick={() => setFlagTimer(!flagTimer)}>Timer</button>
    </div>
  )
}

export default App
