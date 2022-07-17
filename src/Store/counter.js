/**
 * 例. 实现按键累加计数器
 */

// 1. 导入makeAutoObservable方法
import { makeAutoObservable } from "mobx"

class CounterStore {
  // 2. 定义数据状态(state)
  count = 0

  // 3. 数据响应式处理
  constructor() {
    makeAutoObservable(this)
  }

  // 4. 定义action函数 以修改数据
  addCount = () => {
    this.count++
    console.log("add", this.count)
  }
}

// 5. 实例化并导出给react使用
const counterStore = new CounterStore()
export { counterStore }