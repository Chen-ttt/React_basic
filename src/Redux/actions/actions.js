/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 16:24:49
 * @LastEditTime: 2022-08-09 16:32:46
 * @LastEditors:  
 */

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

// const addTwo = {
//   type: 'ADD',
//   num: 2
// }

// const square = {
//   type: 'SQUARE'
// }

export {
  addAction,
  squareAction
}