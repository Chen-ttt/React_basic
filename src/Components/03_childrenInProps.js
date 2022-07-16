/**
 * props的children属性
 *   当父组件调用子组件时, 如果使用成对闭合的标签, 则在标签内添加的元素
 *   无需绑定, 自动写入props的children属性中
 * 
 *   当里面只写了一个元素时, 直接用props.children即可取值
 *   当里面有多个元素时, children里存的是一个Array, 需要通过下标取值
 * 
 * children可以是
 *    1. 普通文本
 *    2. 普通标签元素
 *    3. 函数
 *    4. JSX
 * 
 * 目的: 高阶组件
 */

import React from "react"

function Son (props) {
  console.log(props)
  props.children[2]() // 调用函数
  return (
    <div>
      {props.children[0]}
      {props.children[1]}
      {props.children[3]}
    </div>
  )
}

class Father extends React.Component {
  state = {
    msg: 'Hello'
  }


  render () {
    return (
      <Son>
        Passing text  {/**1.普通文本 */}
        <span>Passing HTML label</span>{/**2.普通标签元素 */}
        {() => console.log("Passing function")}{/**3.函数 */}
        {<div><p>{'Passing msg:' + this.state.msg}</p></div>}{/**4.JSX */}
      </Son>
    )
  }
}


function App () {
  return ( // JSX
    <div className="App">
      <Father />
    </div>
  )
}

export default App
