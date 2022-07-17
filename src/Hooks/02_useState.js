/**
 * Hooks - 多次调用useState
 * 
 * 1. useState函数可以执行多次, 每次执行相互独立, 每调用一次都为组件提供一个新状态
 * 2. useState只能在函数组件的外层被调用
 *    不能嵌套在if/for/内部函数中, 因为react内部状态的维护依赖于顺序, 条件语句等会将该顺序打乱
 */

/**
 * Hooks - useState初始值
 * 当传入useState的初始值 需要经过一些计算才能确定时, 可以传递一个回调函数
 * 在该函数中计算并返回初始的state, 该函数和直接传入初始值一样, 只有初次渲染时才起作用
 */

import { useState } from "react"

function Test ({ init }) {
  const [list, setList] = useState([])
  const [count, setCount] = useState(() => {
    // 定义获取初始值的操作, 最后return的值即为count的初始值
    return init * 2
  })

  function setTest () {
    setCount(count + 1)
    setList([...list, count])
  }

  return (
    <div>
      {list.map((item, index) => <li key={index}>{item}</li>)}
      <button onClick={setTest}>{count}</button>
    </div>
  )
}

function App () {
  return ( // JSX
    <div className="App">
      <Test init={10} />
      <Test init={20} />
    </div>
  )
}

export default App
