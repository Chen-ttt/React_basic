/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 16:33:38
 * @LastEditTime: 2022-08-09 17:55:50
 * @LastEditors:  
 */

// state默认值为10
// 每次查看或修改state都会调用reducer函数
const reducer = (state = 10, action) => {
  console.log("enter")
  switch (action.type) {
    case 'ADD':
      return state + action.num
    case 'SQUARE':
      return state * state
    default:
      return state
  }
}

export {
  reducer
}