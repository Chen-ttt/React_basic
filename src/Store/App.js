/**
 * Mobx + React 组件模块化
 * 例. 两个二级组件 counterStore listStore
 *    一个根组件 rootStore
 *    一个业务组件 App
 */

import { useStore } from "./index"
import { observer } from "mobx-react-lite"

function App () {
  const rootStore = useStore()

  return (
    <div>
      {/* 渲染数据 */}
      Count: {rootStore.counterStore.count}
      <br></br>
      List: {rootStore.listStore.filterList}
      <br></br>

      {/* 点击事件触发action函数 以修改count值 */}
      <button onClick={rootStore.counterStore.addCount}>Add 1</button>
      <button onClick={rootStore.listStore.addList}>Add List</button>
    </div>
  )
}

export default observer(App)
