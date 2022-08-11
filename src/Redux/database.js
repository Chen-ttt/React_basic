/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-11 15:07:33
 * @LastEditTime: 2022-08-11 19:13:48
 * @LastEditors:  
 */
import axios from "axios"
import { useEffect } from "react"
import "./mockDatabase/centreMock"
import "./mockDatabase/manufacturerMock"

function App () {
  useEffect(() => {
    axios.get('/manufacturerMock', { dataType: 'json' })
      .then(res => {
        console.log("mock data", res.data.manufacturerInfo)
      })
  })

  return (
    <div>
      123
    </div>
  )
}

export default App