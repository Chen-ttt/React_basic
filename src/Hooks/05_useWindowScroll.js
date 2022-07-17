/**
 * Hooks - useWindowScroll
 */
import { useState } from "react"

function WindowScroll () {
  const [y, setY] = useState(0)

  window.addEventListener('scroll', () => {
    const distance = document.documentElement.scrollTop
    setY(distance)
    // console.log(y)
  })
  return <div>{y}</div>
}

function App () {
  return ( // JSX
    <div style={{ height: '1200px' }}>
      <WindowScroll />
    </div>
  )
}

export default App
