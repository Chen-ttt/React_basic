/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-08 19:21:57
 * @LastEditTime: 2022-09-08 19:41:32
 * @LastEditors:  
 */

import React from 'react'

// React.memo() - 将组件包裹起来, 变成纯函数, 相同的输出对应相同的输入, 只有输入发生改变时才重新渲染
const PureCom = React.memo(StaticCom)

function App () {
  const arr = [1, 2, 3]
  const someInput = 3

  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
      // console.log(time)
    }, 1000)
  }, [time])

  return (
    <div>
      <h1>{time.getSeconds()}</h1>
      {/* 注意!!! 但这里输入someInput时, PureCom不会一直被重新渲染, 因为该变量一直是3 */}
      {/* 但如果输入arr, PureCom就会一直渲染, 因为arr是引用类型, 每次App组件重新渲染时, arr变量被重新声明定义, 引用值发生了改变, 因此PureCom一直在重新渲染 */}
      <PureCom input={someInput} />
    </div>
  )
}

function StaticCom ({ input }) {
  const [number, setNumber] = React.useState(100)

  const dirtyWork = () => {
    console.log("正在进行大量运算")
    return number
  }

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}>
      </input>
      <h2>{dirtyWork()}</h2>
      <h2>{input}</h2>
    </div>
  )
}

export default App