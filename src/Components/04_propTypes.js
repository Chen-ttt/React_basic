/**
 * PropTypes API
 *  props校验:
 *    1. 安装属性校验包 yarn add prop-types
 *    2. 导入prop-types中的PropTypes
 *    3. 使用 组件名.propTypes = {...} 来添加校验规则
 * 
 * 注意!!! 导入包的时候是开头大写 PropTypes
 *        添加规则的时候, propTypes属性是开头小写
 * 
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 * 
 *  props默认值
 *    1. 组件名.defaultProps = {...} 设定默认值
 *    2. 直接使用函数参数默认值 !!!更推荐
 */

import React from "react"
import PropTypes from "prop-types"

function Test ({ list, text, any, obj, date = 90 }) {
  return (
    <div>
      {text}
      {list.map((item, index) => <p key={index}>{item}</p>)}
      {obj.name}
      {date}
    </div>
  )
}

// 定义规则
Test.propTypes = {
  // 判断数据类型
  list: PropTypes.array, // 限制list参数的类型必须是数组, 否则报错
  // 校验规则支持的数据类型array bool func number object string

  // 判断必填项
  text: PropTypes.string.isRequired,
  any: PropTypes.any.isRequired,

  // 判断特定结构的对象
  obj: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })
}

// 定义默认值 - 不推荐
// Test.defaultProps = {
//   date: 31
// }

class Father extends React.Component {
  render () {
    return (
      <Test
        list={[1, 2, 3]}
        text={"Hello"}
        any={1}
        obj={{ name: 'Tong', age: 18 }}
      />
    )
  }
}


function App () {
  return ( // JSX
    <div className="App">
      <Father />
    </div>
  )
}

export default App
