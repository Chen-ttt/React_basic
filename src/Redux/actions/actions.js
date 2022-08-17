/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 16:24:49
 * @LastEditTime: 2022-08-16 18:36:18
 * @LastEditors:  
 */

import axios from "axios"
import "../mockDatabase/manufacturerMock"

/**
 * action 可以直接写成一个对象, 也可以写一个返回action对象的函数
 */

const addAction = (num) => {
  return {
    type: 'ADD', // type描述执行的动作
    num
  }
}

const squareAction = () => {
  return {
    type: 'SQUARE'
  }
}

// 异步请求 - action creator
const getAction = () => {
  return (dispatch) => {
    axios.get('/manufacturerMock', { dataType: 'json' })
      .then(res => {
        console.log("mock data", res.data.manufacturerInfo)
        dispatch({
          type: 'GET',
          data: res.data.manufacturerInfo
        })
      })
  }
}

export {
  addAction,
  squareAction,
  getAction
}