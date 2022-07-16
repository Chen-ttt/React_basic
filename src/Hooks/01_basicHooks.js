/**
 * Hooks
 * 本质: 一套能够使函数组件跟强大, 更灵活的钩子
 * 
 * React体系中组件分为类组件和函数组件, 而函数组件这种表达形式更匹配React的设计理念(即 UI=f(data)), 
 * 也更有利于逻辑拆分和重用; 而先前的函数组件不可以有自己的状态, 为了能让函数组件可以有自己的状态, 从
 * React v16.8开始, Hooks应运而生; 从此函数组件不再是无状态组件
 * 
 * Hooks解决了两个问题
 *    1. 组件的状态逻辑复用
 *    2. class组件自身的问题
 *       class组件很厚重, 有不可忽视的学习成本, 比如各种生命周期, this指向问题等, Hooks更加轻快灵活
 * 注意!!! Hooks只能在函数组件中使用
 * 
 */

/**
 * useState
 *   1. 导入useState函数
 *   2. 在函数组件中, 调用useState函数并传入初始值
 *   3. 该函数返回一个数组, 包含两个元素 [数据, 修改改数据的方法]
 *   4. 使用数据, 使用函数修改数据
 */
import { useState } from "react"


function App () {
  const [count, setCount] = useState(0)

  return ( // JSX
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
