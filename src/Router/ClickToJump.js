/**
 * 使用useNavigate进行路由跳转
 */

// 1. 导入useNavigate
import { useNavigate } from "react-router-dom"

function ClickToJump () {
  // 2. 调用useNavigate钩子函数, 返回一个跳转函数
  const navigate = useNavigate()

  // !!! 不传参跳转
  const goHome = () => {
    // 3. 调用跳转函数, 传入要跳转的路径
    navigate('/')
  }

  const goAbout = () => {
    // 4. 如果跳转时不想保存历史记录, 需要额外添加参数replace为true(默认为false)
    // 此时, 页面跳转到about后, 就无法再通过回退按钮返回login页面
    navigate('/about', { replace: true })
  }

  // !!! 传参跳转 - useSearchParams
  // 发送方: 使用以下URL形式
  const goHomeParams = () => {
    navigate('/?id=1001&name=tong')
  }

  // !!! 传参跳转 - 
  // 发送方: 1. 使用以下URL形式
  //        2. 路由配置时, 需要修改为path='about/:id/:name', 见App.js
  const goAboutParams = () => {
    navigate('/about/1001/tong')
  }


  return (
    <div>
      <button onClick={goHome}>Go to Home Page</button>
      <button onClick={goHomeParams}>Go to Home Page with Params</button>
      <br></br>
      <button onClick={goAbout}>Go to About Page</button>
      <button onClick={goAboutParams}>Go to About Page with Params</button>
    </div>
  )
}

export default ClickToJump