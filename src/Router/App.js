/**
 * 路由 - 核心组件
 * 
 * BrowserRouter
 *   1. 作用: 初始化路由; 包裹整个应用, 一个React应用只需要使用一次
 *   2. 两种常用的Router:
 *      a.HashRouter - 使用URL的哈希值实现
 *      b.BrowserRouter - 使用H5的history.pushState API实现
 *      区别: HashRouter的URL比BrowserRouter多了一个#, 更推荐BrowserRouter
 * 
 * Link
 *   1. 作用: 指定导航链接, 完成路由跳转
 *           点击某个Link后, URL会发生变化, 才进行之后的路由匹配
 *   2. 组件通过to属性指定路由地址, 最终会渲染为a链接元素<a href="..."></a>
 * 
 * Routes
 *   作用: 提供一个路由出口, 满足条件的(即和当前URL匹配的)路由组件<Route/>会渲染到Routes内部的区域
 * 
 * Route
 *   作用: 指定导航链接, 完成路由匹配
 *        如果当前的URL和当前Route中的path匹配上, 此时完成路由匹配, 将渲染对应的element 
 */

// 导入包和组件
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ClickToJump from './ClickToJump'
import Layout from './Layout'
import Board from './SecondLevelRouter/Board'
import Artical from './SecondLevelRouter/Artical'
import DefaultPage from './SecondLevelRouter/DefaultPage'
import NotFound from './NotFound'

//进行路由配置
function App () {
  return (
    // 声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* link点击跳转 to用来配置路由地址 */}
      {/* 注意 这部分只是显示地将跳转链接放在页面上, 也可以不加Link, 如果不加的话, 用户只能手动输入url进行跳转 */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/layout">Layout</Link>

      {/* 路由出口 将渲染路由对应的组件 */}
      <Routes>
        {/* 指定路径和组件的对应关系 path代表路径 element代表组件 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='about/:id/:name' element={<About />}></Route>
        <Route path='login' element={<ClickToJump />}></Route>
        <Route path='layout' element={<Layout />}>
          {/* 定义二级路由嵌套 将匹配的二级路由对应的组件 拿到父组件Layout中的Outlet位置渲染 */}
          <Route path='board' element={<Board />}></Route>
          <Route path='artical' element={<Artical />}></Route>
          {/* 设置默认的二级路由页面 只需要不写path 并添加index属性 */}
          {/* 当url为"localhost:3000/layout/"时 将渲染这个默认页面 */}
          <Route index element={<DefaultPage />}></Route>
        </Route>

        {/* 404页面 将path写成* */}
        {/* 当所有路径都没有匹配到时 显示该页面 */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App