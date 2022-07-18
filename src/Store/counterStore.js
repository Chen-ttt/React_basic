/**
 * Mobx + React 组件模块化
 * 二级组件: counterStore
 */

import { makeAutoObservable } from "mobx"

class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  addCount = () => {
    this.count++
    console.log("add", this.count)
  }
}

export { CounterStore }