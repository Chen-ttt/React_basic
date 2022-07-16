/**
 * 兄弟通信
 *   通过共同的父组件通信
 * 
 * 例. B组件数据传给A
 *     1. B组件数据通过子传父, 传给Father
 *     2. Father再将数据通过父传子, 传给A组件
 */

import React from "react"

function SonA (props) {
  return (
    <div>
      Here is A.
      <br></br>
      {props.msgData}
    </div>
  )

}

function SonB (props) {
  const data = "This is data from B"
  return (
    <div>
      Here is B.
      <br></br>
      <button onClick={() => props.getMsg(data)}>Send Msg from B to Father</button>
    </div>
  )

}

class Father extends React.Component {
  state = {
    data: ""
  }

  // 接收B传回的数据
  getMsg = (msg) => {
    console.log(msg)
    this.setState({ // 再传给A
      data: msg
    })
  }

  render () {
    return (
      <div>
        <SonA msgData={this.state.data} />
        <SonB getMsg={this.getMsg} />
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
