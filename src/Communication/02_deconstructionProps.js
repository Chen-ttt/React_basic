/**
 * props解构
 * 一般都通过解构props来简化代码
 *  1. 直接以对象属性形式接收参数
 *  2. 仍以props接收数据, 在第一行就把props解构成各个对象属性
 * 
 * 注意!!! 解构时, 用来接收数据的变量名字必须和props中属性名一致
 *        顺序可以不一样, 但名字拼写必须一样, 否则会取到undefined
 */

import React from "react"

function SonFunction ({ msg, list, dreamFunction }) {
  dreamFunction()
  return (
    <div>
      I'm SonFunction.
      <br></br>
      msg: {msg}
      <br></br>
      list: {list.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

function SonF (props) {
  const { msg, person, template } = props
  return (
    <div>
      I'm SonF.
      <br></br>
      msg: {msg}
      <br></br>
      person's name: {person.name}
      <br></br>
      template: {template}
    </div>
  )
}

class Father extends React.Component {
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
    return (
      <div>
        <SonFunction
          msg={this.state.message}
          list={this.state.list}
          dreamFunction={this.state.dreamFunction}
        />
        <SonF
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
