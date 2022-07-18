/**
 * Mobx + React 组件模块化 & computed计算属性
 * 二级组件: listStore
 * 
 * 计算属性
 * 需要经过一些计算才能得到正确值的属性
 * 例. 筛选数组中的‘vue’值, 其他值都留下
 */

import { computed, makeAutoObservable } from "mobx"

class ListStore {
  list = ['react', 'vue']

  constructor() {
    makeAutoObservable(this, {
      filterList: computed
      // 此处的computed只是表明filterList是个计算属性, 并没有实际作用
      // 因为下面已经用get方法模拟实现了计算属性, 加不加computed效果都一样
    })
  }

  // 利用get方法模拟实现计算属性(意义是, 依赖的数据一旦发生变化, 该方法就会被调用)
  get filterList () { // filterList并不是一个方法, 只是一个属性
    console.log("执行filter")
    return this.list.filter(item => (item !== 'vue')) // 返回新的数组, 并没有进行原地改动
  }

  // 此时, filterList是listStore的计算属性

  // !!! 业务端App要想响应式更新list数据
  //     必须让listStore.filterList和组件绑定(而不是绑定list), 才能实现实时更新, 得到正确的值

  addList = () => {
    this.list.push('angular')
    console.log(this.list)
  }
}

export { ListStore }