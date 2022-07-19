/*
 * @Description: 例. 实现按键累加计数器
 * @Author: Tong Chen
 * @Date: 2022-07-18 11:13:30
 * @LastEditTime: 2022-07-19 16:19:31
 * @LastEditors:  
 */

/**
 * Mobx是一个独立的响应式的库, 可以独立于任何UI框架而存在
 * 
 * 作用
 *   Mobx: 负责响应式数据建模
 *   React: 负责UI视图框架 渲染内容
 * 
 * 第一个store - 实现按键累加计数器
 * 
 * 1. 完成Mobx数据建模
 *    数据状态state + 数据响应式处理 + action函数 + 实例化对象
 * 2. 完成React组件
 *    定义组件 + 使用store中的数据和action函数
 * 3. 完成Mobx和React的连接
 *    导入中间件 + 包裹函数组件
 */

// 1. 导入实例对象counterStore
import { counterStore } from "./counter"
// 2. 导入observer
import { observer } from "mobx-react-lite"

function App () {
  console.log(counterStore)
  // 完成响应式变化后, 数据每改变一次, App函数组件就被更新一次, counterStore就被打印一次

  // 3. 完成组件渲染
  return (
    <div>
      {/* 渲染数据 */}
      Count: {counterStore.count}
      <br></br>

      {/* 点击事件触发action函数 以修改count值 */}
      <button onClick={counterStore.addCount}>Add 1</button>
    </div>
  )
}

// 4. 用observe方法包裹函数组件
// 注意!!! observe是负责连接react和mobx的中间件, 这一步将完成响应式变化
// 若不用observe, 只有mobx对象中的count数据发生变化, 但react组件不会更新
export default observer(App)
