/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-16 17:26:47
 * @LastEditTime: 2022-08-17 16:07:56
 * @LastEditors:  
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from '../reducers/math'

// thunk需要以中间件的形式存在, 因此用applyMiddleware处理
// 使用中间件thunk处理异步请求
const store = createStore(reducer, applyMiddleware(thunk))
console.log(store.getState())

export default store