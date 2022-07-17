/**
 * Hooks - useEffect发送网络请求
 */

import { useEffect } from "react"

function App () {
  useEffect(() => {
    async function fetchData () {
      const res = await fetch('http://geek.itheima.net/v1_0/channels')
      console.log(res)
    }
    fetchData()
  })

  return ( // JSX
    <div className="App">

    </div>
  )
}

export default App
