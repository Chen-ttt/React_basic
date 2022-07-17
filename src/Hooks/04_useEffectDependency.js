/**
 * Hooks - useEffect
 * 通过第二个参数 依赖项(一个由依赖数据组成的数组) 控制执行时机
 * 
 * 1. 默认状态(useEffect只传入第一个函数参数, 不传入依赖项)
 *    组件初始化时先执行一次, 之后每次数据修改都将引起组件更新, 副作用执行
 * 
 * 2. 添加一个空依赖项(将报警告)
 *    仅在组件初始化时执行一次
 * 
 * 3. 添加特定依赖项
 *    组件初始化时执行一次, 之后每当依赖项发生数据变化时, 组件更新, 副作用执行
 * 
 * 注意. 只要回调函数中用到的数据状态, 就要写进依赖中, 否则报警告
 */
import { useEffect, useState } from "react"

function App () {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Hello')

  useEffect(() => {
    // 定义副作用
    console.log("副作用被执行啦")
    document.title = count // 使用dom
  }, [count]) // 只有count变化, 该函数才执行

  return ( // JSX
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setText(text + '9')}>{text}</button>
    </div>
  )
}

export default App
