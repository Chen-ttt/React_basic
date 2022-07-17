/**
 * 嵌套路由
 * 保证子路由可以共享父路由的界面而不会覆盖
 * 
 * 使用Outlet实现嵌套路由
 *   1. Outlet用于父组件中可以为子路由的组件占位
 *   2. 在二级路由匹配完成后, 会将对应的子路由的组件, 拿到Outlet位置渲染
 */
import { Outlet } from "react-router-dom"

function Layout () {
  return (
    <div>
      Layout一级路由
      {/* 二级路由的出口, 向程序表明, 将来二级路由对应的组件就在这里渲染 */}
      <Outlet />
    </div>
  )
}

export default Layout