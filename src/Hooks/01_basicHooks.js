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
 * 
 * 注意: 该修改数据的函数 本质上仍是用一个新的值来替换原来的值, 而不是直接修改原值
 *      因此传参时要写新的值count+1, 不能写自增count++
 */
import { useState } from "react"

function App () {
  // 解构: 变量名可以自定义, 保持语义化即可; 
  // 但两者顺序不可以调换, 因为useState返回值本质上是数组
  const [count, setCount] = useState(0)

  return ( // JSX
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

/**
 * 更新过程
 * 
 * 1. 首次渲染
 *    a. 组件内部的代码被执行一次
 *    b. 其中useState中传入的初始值0, 只有在此时首次渲染时生效
 * 
 * 2. 更新渲染
 *    a. 只要调用setCount, 组件都会被再次渲染, 该函数会被再执行一次
 *    b. 其中useState执行时, 不再使用初始值0, 而是使用新的count值, 并且模版会用这个新的值渲染
 */

export default App

