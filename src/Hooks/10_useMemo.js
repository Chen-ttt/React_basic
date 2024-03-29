/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-08 18:37:06
 * @LastEditTime: 2022-09-08 19:56:15
 * @LastEditors:  
 */
import React from 'react'

function App () {
  const [number, setNumber] = React.useState(100)
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
      // console.log(time)
    }, 1000)
  }, [time])

  // 模拟一个进行大量运算的函数
  // 每当setTime()执行, 改变了time, 都会导致视图重新渲染, 但number的值没有改变, 其实这里的大量运算是无意义的
  const dirtyWork = () => {
    console.log("正在进行大量运算")
    return number
  }

  // useMemo - 传递一个函数和依赖项, 函数会返回一个值; 只有在依赖项发生改变时, 才会重新调用此函数, 返回一个新的值
  // 因此我们可以将一些昂贵的计算放在useMemo中, 只有依赖项改变时才更新
  const result = React.useMemo(() => {
    return dirtyWork()
  }, [number])

  // 相较于React.memo, useMemo可以防止由于依赖项的引用值变化 而引起的组件重新渲染问题

  // !!! 应用: 当组件之间 使用context通信时, 父组件会给子组件传递一些值例如<Provider value={...} />
  // 但当某些不需要传递的值发生变化而引起重新渲染时, 会导致子组件也一起重新渲染
  // 因此可以在父组件中, 将不变的 需要传递的值, 用useMemo缓存起来, 这样即使父组件重新渲染, 只要useMemo中的值不变, 子组件也不会重新渲染

  // !!! 替代方案
  // 将表示时钟的h1组件和输入框组件分离, 自己管理自己的状态, 有自己的单一职责, 不要互相影响
  // 再在当前的root组件 分别引入这两个组件

  return (
    <div>
      <h1>{time.getSeconds()}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}>
      </input>
      <h2>{result}</h2>
    </div>
  )
}

export default App