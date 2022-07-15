import React from "react"

/**
 * 事件绑定
 *  1. 语法 - on + 事件名称 = {事件回调函数}
 *           如 <div onClock={() => {...}}>Hello</div>
 *  2. 注意 - react事件采用驼峰命名, 如onMouseEnter, onFocus
 *  3. 利用参数来获取事件e
 */

function Hello () {
  const clickHandler = (e) => {
    console.log("Hello被点啦", e)
  }
  return <div onClick={clickHandler}>Hello</div>
}

class HelloComponent extends React.Component {
  // 标准写法
  // 避免this指向问题, 回调函数中的this永远指向的是当前的组件实例对象
  clickHandler = (e) => {
    console.log("HelloComponent被点啦", e)
  }
  render () {
    return <div onClick={this.clickHandler}>This is a class component!</div>
  }
}

/**
 * 利用回调函数传递自定义参数
 *  1. 绑定事件时, onClick={}中的内容改为一个回调函数的形式, 参数为空或者获取事件e
 *  2. 执行clickHandler并传递自定义参数
 *  注意. 参数多的时候, 需要注意形参和实参一一对应
 */

function Click () {
  const clickHandler = (e, msg) => {
    console.log("Click被点啦", e, msg)
  }
  return <div onClick={(e) => clickHandler(e, "hhh")}>Click</div>
}

function App () {
  return ( // JSX
    <div className="App">
      <Hello />
      <Hello></Hello>

      <HelloComponent />
      <HelloComponent></HelloComponent>

      <Click />
    </div>
  )
}

export default App


