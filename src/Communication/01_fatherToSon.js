/**
 * 组件通信
 *   各个组件之间互相沟通, 传递数据
 * 
 * 1. 父子关系 - 重点
 * 2. 兄弟关系 - 自定义时间模式产生技术方法eventBus / 通过共同的父组件通信
 * 3. 其他关系 - mobx / redux / 基于hook的方案
 */

import React from "react"

/**
 * 父传子通信
 *   通过props对象传递数据
 *   1. props是只读对象, 根据单项数据流的要求, 子组件只能读取props中的属性,
 *      不能进行修改
 *   2. props可以传递任意数据, 除了常规数据外, 还可以传递函数/JSX
 *      传递的函数可以直接调用, 也可以放在onClick等事件里
 *      传递JSX, 相当于直接传递了模版, react会把它解析成react element放在props中, 可以直接放在页面上渲染
 */

// 1. 函数子组件
function SonFunction (props) {
  // c.通过props参数接收props对象, props中的属性名和子组件设定的属性名一致
  props.dreamFunction() // 可以直接调用传递过来的参数
  return (
    <div>
      I'm SonFunction.
      <br></br>
      msg: {props.msg}
      <br></br>
      list: {props.list.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

// 2. 类子组件
class SonClass extends React.Component {
  // d.通过this.props接收props对象, props中的属性名和子组件设定的参数一致
  render () {
    return (
      <div>
        I'm SonClass.
        <br></br>
        {this.props.msg}
        <br></br>
        {this.props.person.name}
        <br></br>
        {this.props.person.age}
        <br></br>
        {this.props.template}
      </div>
    )
  }
}

// 父组件
class Father extends React.Component {
  // a.父组件提供传递数据state
  state = {
    message: 'Hello my son!',
    list: [1, 2, 3],
    person: {
      name: 'Tong',
      age: 18
    },
    dreamFunction: () => {
      console.log("I'm dream function!! haha")
    }
  }

  render () {
    // b.给子组件的标签添加属性, 值为要传递的数据
    return (
      <div>
        <SonFunction
          msg={this.state.message}
          list={this.state.list}
          dreamFunction={this.state.dreamFunction}
        />
        <SonClass
          msg={this.state.message}
          person={this.state.person}
          template={<span>Passing a template</span>}
        />
      </div>
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
