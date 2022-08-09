/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-14 15:17:58
 * @LastEditTime: 2022-08-09 15:45:48
 * @LastEditors:  
 */
// React - 框架核心包
// ReactDOM - 专门做渲染相关的包

import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
// import App from './App'
// import App from './Router/App'
// import App from './Store/counter/App'
import App from './Redux/index'
// import ContactUs from './email'


// 渲染根组件app 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格模式节点需要去掉 因为会影响useEffect的执行时机
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

