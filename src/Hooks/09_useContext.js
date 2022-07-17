/**
 * Hooks - useContext
 * 
 * 发送: Provider
 * 接收: useContext(这里和之前不也一样, 之前用的是Consumer)
 */

// 1. 导入createContext, useContext
import { createContext, useContext, useState } from "react"

// 2. 调用createContext创建实例对象Context
const Context = createContext()

function ComA () {
  // 4. 接收: 通过useContext获取数据
  // 在需要使用数据的子组件中, 调用useContext并传入要接收的数据相应的Context对象
  // 将返回数据值
  const count = useContext(Context)
  return (
    <div>
      This is A. Receive: {count}
      <ComC />
    </div>
  )
}

function ComC () {
  // 4. 同上
  const count = useContext(Context)
  return <div>This is C. Receive: {count}</div>
}

function App () {
  const [count, setCount] = useState(0)

  return (
    // 3. 发送: 通过Provider提供数据
    // 用Context.Provider包裹父组件, 并将要传递的数据绑定到value属性
    <Context.Provider value={count}>
      <div className="App">
        <ComA />
        {/* 5. 传递的数据是响应式的, 在父组件中修改数据的值, 子组件也会收到修改后的值 */}
        <button onClick={() => setCount(count + 1)}>Add 1</button>
      </div>
    </Context.Provider>
  )
}

export default App
