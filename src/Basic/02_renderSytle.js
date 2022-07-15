/**
 * JSX样式控制
 * 1. 行内样式
 *    元素身上绑定一个style属性; 
 *    直接写则需要注意 style = {{}}, 两个大括号;
 *    通常都先定义一个style对象, 再传对象进去
 * 2. 类名样式
 *    元素身上绑定一个className属性;
 *    导入css文件, 并以字符串形式设定属性className=''
 */
import './app.css'

const styleObj = {
  color: 'green',
  fontSize: '50px'
}
// 动态设定样式 - 三元
const flag = false

function App () {
  return ( // JSX
    <div className="App">
      <span style={{ color: 'red', fontSize: '30px' }}>This is a span</span>
      <br></br>

      <span style={styleObj}>This is a span</span>
      <br></br>

      <span className='active'>This is a span</span>
      <br></br>

      <span className={flag ? 'active' : ''}>Test span</span>
    </div>
  )
}

export default App
