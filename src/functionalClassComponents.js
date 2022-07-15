import React from "react"

/**
 * 函数组件
 *  1. 创建
 *     定义首字母大写的函数Hello(), react内部会根据首字母是否大写来判断该函数是组件还是普通HTML标签
 *     该函数返回要渲染的组件, 如果不需要渲染, 则返回null
 *  2. 渲染 - 使用函数名作为组件标签名称
 *           自闭合标签<Hello/>或成对闭合标签<Hello></Hello>
 */

function Hello () {
  return <div>Hello</div>
}

/**
 * 类组件
 *  1. 创建
 *     import React from "react"
 *     定义首字母大写的类HelloComponent
 *     类组件必须继承React.Component父类, 以使用父类提供的方法和属性
 *     类组件必须提供render(){}方法, 且render方法必须有返回值, 返回值即为要渲染的组件
 *  2. 渲染 - 使用类名作为组件标签名称
 *           自闭合标签<Hello/>或成对闭合标签<Hello></Hello>
 */

class HelloComponent extends React.Component {
  render () {
    return <div>This is a class component!</div>
  }
}

function App () {
  return ( // JSX
    <div className="App">
      <Hello />
      <Hello></Hello>

      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App

