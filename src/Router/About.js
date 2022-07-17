/**
 * params传参
 * 使用useParams在路由跳转中传递参数
 */

// 1. 导入useParams
import { useParams } from "react-router-dom"

function About () {
  // 2. 调用useParams, 返回一个包含参数的对象
  let params = useParams()
  // params = {
  //    id: 1001,
  //    name: tong
  // }
  console.log("About receive:", params.id, params.name)

  return <div>About Page receive: {params.id} {params.name}</div>
}

export default About