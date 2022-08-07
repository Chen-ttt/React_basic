/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-07 17:16:57
 * @LastEditTime: 2022-08-07 17:25:02
 * @LastEditors:  
 */

/**
 *  构建store
 */

// 1. 导入方法
import { createStore } from "redux"

// 2. 导入创建好的reducer
import { reducer } from "../Reducer"

const store = createStore(reducer)

export default store

