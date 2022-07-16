/**
 * 子传父
 * 父通过props给子传递函数, 子接收该函数并调用, 同时将数据作为实参传递
 */

import React from "react"

function SonFunction ({ func, msg }) {
  return (
    <div>
      <button onClick={() => func("Hi. This is son.")}>Click Here</button>
    </div>
  )
}

class Father extends React.Component {
  state = {
    msg: "hello",
    func: (data) => {
      console.log(data)
    }
  }

  render () {
    return (
      <div>
        <SonFunction
          msg={this.state.msg}
          func={this.state.func}
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
