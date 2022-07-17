/**
 * searchParams传参
 * 使用useSearchParams在路由跳转中传递参数
 */

// 1. 导入useSearchParams
import { useSearchParams } from "react-router-dom"

function Home () {
  // 2. 调用useSearchParams, 返回一个params对象
  let [params] = useSearchParams()

  // 3. params对象中有一个get方法
  //    调用该方法, 并传入键值, 获取对应参数
  let id = params.get('id')
  let name = params.get('name')

  // 注意!!! 若没有搜索到对应的值, 变量为null
  let test = params.get('hhhhh')
  console.log("Home receive:", id, name, test)

  // 注意!!! 如果参数传错, 例如传了id=1001&id=1002, 以第一个为主, id最后取到1001

  return <div>Home Page receive: {id}</div>
}

export default Home