/**
 * 函数组件
 *  1. 创造
 *     定义首字母大写的函数Hello(), react内部会根据首字母是否大写来判断该函数是组件还是普通HTML标签
 *     该函数返回要渲染的组件, 如果不需要渲染, 则返回null
 *  2. 渲染 - 使用函数名作为组件标签名称
 *           自闭合标签<Hello/>或成对闭合标签<Hello></Hello>
 */

function Hello () {
  return <div>Hello</div>
}

function App () {
  return ( // JSX
    <div className="App">
      <Hello />
      <Hello></Hello>
    </div>
  )
}

export default App
