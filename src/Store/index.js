/**
 * 根组件
 *   组合子模块
 *   封装统一导出的供业务使用的方法
 */

// 1. 导入子组件
import { CounterStore } from "./counterStore"
import { ListStore } from "./listStore"
import React from "react"

class RootStore {
  // 2. 将子组件的实例化对象作为根组件的属性
  constructor() {
    this.counterStore = new CounterStore()
    this.listStore = new ListStore()
  }
}

// 3. 实例化根组件
const rootStore = new RootStore()

// 4. 使用Context完成跨层数据传输
/**
 * 注意!!! Context中的查找机制如下
 *   1. 在创建context对象时, 参数给定一个默认值, 可以为空
 *   2. 数据发送方 使用Provider包裹组件, 并将数据绑定到Provider的value属性中
 *   3. 子组件调用useContext进行查找, 
 *         若找到, 返回绑定数据
 *         若没找到对应的数据或没有找到Provider, 返回当初createContext时设定的默认值, 没有传入该参数则返回null
 */

// 因此 此处将rootStore设定为默认值, 且没有Provider, 查找时将返回rootStore
const context = React.createContext(rootStore)

// 5. 返回一个箭头函数, 使上层业务组件可以调用该函数来查找各级组件
const useStore = () => React.useContext(context)

export { useStore }