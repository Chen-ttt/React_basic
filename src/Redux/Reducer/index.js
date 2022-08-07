/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-07 17:11:37
 * @LastEditTime: 2022-08-07 17:15:01
 * @LastEditors:  
 */

/**
 * 构建reducer
 */

const initState = {
  value: 'default'
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'send_type':
      return Object.assign([], state, action)
    default:
      return state
  }
}

module.exports = {
  reducer
}