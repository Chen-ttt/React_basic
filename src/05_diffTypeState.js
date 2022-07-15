/**
 * 组件状态的修改
 *   原则!!! 不可以直接修改state的属性值, 而是给一个新的数据直接覆盖属性当前的值
 *   对于数组的添加, 可以将旧元素展开再添加新元素
 *   对于数组的删除, 可以用filter删除符合条件的元素, 返回一个新数组
 */
import React from "react"

class TestComponents extends React.Component {
  state = {
    count: 0,
    arr: [1, 2, 3],
    moreArr: [1, 2, 3, 4, 5, 6, 7],
    person: {
      name: 'Tong',
      age: 18
    }
  }

  changeState = () => {
    this.setState({
      count: this.state.count + 1,
      arr: [...this.state.arr, 99], // 将数组的旧元素展开
      moreArr: this.state.moreArr.filter((item, index) => index === 0 ? false : true),
      person: {
        ...this.state.person, // 将person对象的旧属性展开
        name: this.state.person.name + '!' // 再用新的值覆盖之前的name属性值
      }
    })

  }

  render () {
    return (
      <div>
        This is a class component.
        <br></br>
        当前计数为: {this.state.count}
        <br></br>
        当前数组为: {this.state.arr}
        <br></br>
        当前数组为: {this.state.moreArr}
        <br></br>
        当前姓名为: {this.state.person.name}
        <br></br>
        当前年龄: {this.state.person.age}
        <button onClick={this.changeState}>Change!</button>
      </div>
    )
  }
}

function App () {
  return ( // JSX
    <div className="App">
      <TestComponents />
    </div>
  )
}

export default App
