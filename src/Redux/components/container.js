/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-09 16:47:18
 * @LastEditTime: 2022-08-09 17:54:51
 * @LastEditors:  
 */
import { addAction, squareAction } from '../actions/actions'
import { connect } from 'react-redux'

function Container (props) {
  const { num, add, square } = props
  return (
    <div>
      Calculator:  <p>{num}</p>
      <button onClick={() => add(1)}>Add 1</button>
      <button onClick={() => add(2)}>Add 2</button>
      <button onClick={() => square()}>Square</button>
    </div>
  )
}

/**
 * 如何完成响应式的动态渲染？
 * 
 * connect方法 - 将store和组件连接在一起
 * 返回一个经过包裹的组件(不改变组件本身)
 * 
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * mergeProps: 将mapStateToProps和mapDispatchToProps返回的结果和组件自身的props传入回调函数mergeProps, 返回合并后的props
 */

// mapStateToProps将store中的数据state作为props绑定到组件中
// 当store中数据发生变化, 就会调用mapStateToProps, 将变化后的state映射到props中
// 返回的对象会和props合并
const mapStateToProps = (state) => {
  return ({
    num: state
  })
}

// mapDispatchToProps将action作为props绑定到组件中, 建立组件和store.dispatch的映射关系
// 定义UI组件如何发出action, 实际上就是要调用dispatch方法
// 可以定义单个函数或返回对象, 每个属性将返回一个新的方法
const mapDispatchToProps = (dispatch) => {
  return ({
    add: (num) => dispatch(addAction(num)),
    square: () => dispatch(squareAction())
  })
}

// 执行时需要传入接收数据的组件Container
// 返回的是将store和Container连接完成后的组件
export default connect(mapStateToProps, mapDispatchToProps)(Container)