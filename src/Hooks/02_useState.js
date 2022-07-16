/**
 * Hooks - useState
 * 
 * 1. useState函数可以执行多次, 每次执行相互独立, 每调用一次都为组件提供一个新状态
 * 2. useState只能在函数组件的外层被调用
 *    不能嵌套在if/for/内部函数中, 因为react内部状态的维护依赖于顺序, 条件语句等会将该顺序打乱
 */
import { useState } from "react"

function App () {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])

  function setTest () {
    setCount(count + 1)
    setList([...list, count])
  }

  return ( // JSX
    <div className="App">
      {list.map((item, index) => <li key={index}>{item}</li>)}
      <button onClick={setTest}>{count}</button>
    </div>
  )
}

export default App
