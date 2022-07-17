/**
 * Hooks - useEffect
 * 为react函数组件提供副作用处理
 * 
 * 副作用
 *   1. 一个函数除了主作用, 其他都是副作用;
 *      例如getSum函数, 主作用是返回参数的和, 但除此之外, 该函数还修改全局变量test的值并打印, 这就属于副作用
 *   2. 对于React组件来说, 主作用就是根据数据(state/props)渲染UI, 除此之外, 都是副作用
 * 常见副作用:
 *    数据请求ajax发送
 *    手动修改dom
 *    localStorage操作
 */

/**
 * 例. 在修改数据之后, 把count值放到网页标题中
 *     网页标题不在页面渲染范围内, 需要用到DOM, 属于副作用
 * 
 * 1. 导入useEffect函数
 * 2. 在函数组件内调用useEffect函数, 并传入一个回调函数来定义副作用
 * 3. 首次渲染时, 副作用会执行一次
 *    之后状态每改变一次, 组件更新一次, 副作用也会执行一次
 */
import { useEffect, useState } from "react"

// 例子
let test = 0
function getSum (a, b) {
  console.log(test++) // 副作用
  return a + b // 主作用
}
getSum(1, 2)

function App () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // 定义副作用
    document.title = count // 使用dom
  })

  return ( // JSX
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
