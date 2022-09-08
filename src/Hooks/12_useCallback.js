/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-08 19:21:57
 * @LastEditTime: 2022-09-08 19:46:50
 * @LastEditors:  
 */

import React from 'react'

// useCallback - 和useMemo一样, 但是是为函数而生的, 更简便
const PureCom = React.memo(StaticCom)

function App () {
  const badFunc = () => {
    console.log("111")
  }

  const goodFunc = React.useCallback(() => {
    console.log("111")
  }, [])

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
      {/* 这里如果传入badFunc函数, 也是和11_React_memo.js里一样, 函数的引用值变化的时候, 组件会重新渲染 */}
      {/* 因此将函数用useCallback包裹起来 */}
      <PureCom fn={goodFunc} />
    </div>
  )
}

function StaticCom ({ fn }) {
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
    </div>
  )
}

export default App