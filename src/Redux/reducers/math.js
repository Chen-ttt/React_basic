/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 16:33:38
 * @LastEditTime: 2022-08-17 16:23:08
 * @LastEditors:  
 */

// state默认值为10
// 每次查看或修改state都会调用reducer函数
const reducer = (state = { num: 10 }, action) => {
  console.log("enter")
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        num: state.num + action.num
      }
    case 'SQUARE':
      return {
        ...state,
        num: state.num * state.num
      }

    case "GET": {
      console.log("enter GET")
      return {
        ...state,
        data: action.data
      }
    }
    default:
      return state
  }
}

export {
  reducer
}