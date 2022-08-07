/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-07 17:05:56
 * @LastEditTime: 2022-08-07 17:11:03
 * @LastEditors:  
 */

/**
 * action的构造函数
 */

const sendAction = () => {
  return {
    type: 'send_type',
    value: 'I am action'
  }
}

module.exports = {
  sendAction
}