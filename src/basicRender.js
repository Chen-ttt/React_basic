/**
 * JSX - JavaScript XML
 * 在JS代码里写HTML结构
 * 
 * JSX并不是标准的JS语法, 是JS的语法扩展, 因此JS引擎默认是不认识的; 但脚手架中内置的包可以解析JSX语法, 将我们写的声明式解析成命令式
 */

/**
 * JSX中使用JS表达式 - {JS表达式}
 *  注: {}中只能写表达式, 不能写语句 例如if switch-case等
 * 
 * 1. 识别常规变量
 * 2. 原生js方法调用
 * 3. 三元运算符
 */
const name = 'Tong\'s'
const getAge = function (name) {
  return 18
}
const flag = true

/**
 * JSX列表渲染
 * 核心 - 给一个由<li></li>组成的数组
 *   1. { [<li>{date[0].name}</li>, <li>{date[1].name}</li>], <li>{date[2].name}</li>] }
 * 
 * 技术方案: map
 *   2. { date.map( x => <li>{x.name}</li>) }
 *   // 本质上就是利用map返回一个li元素的新数组
 * 
 * 注意, 遍历列表时, 给每一项一个类型为number/string的不可重复的key id, 提高diff性能
 * 这个key仅仅在框架内部使用, 不会出现在DOM之中
 */
const date = [
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Friday' }
]

/**
 * JSX条件渲染
 * 1. 三元表达式
 *    后面的渲染模版比较复杂时, 可以用()包裹起来, 换行
 *    一般不渲染都写null
 * 2. 逻辑&&运算
 */

// 原则 - 模版中的逻辑尽量精简
const getHtag = (type) => {
  if (type === 1) return <h1>This is h1</h1>
  if (type === 2) return <h2>This is h2</h2>
  if (type === 3) return <h3>This is h3</h3>
}

/**
 * 注意事项
 * 1. JSX必须有且只有一个根节点, 如果没有可以用<></>幽灵节点代替, 幽灵节点不会被渲染
 * 2. 所有标签必须成对闭合或者自闭合
 * 3. 驼峰命名
 * 4. 复杂模版用()包裹, 防止bug
 */

function App () {
  return ( // JSX
    <div className="App">
      {name} app
      {getAge(name)}
      {flag ? 'Nice' : 'Oh no!'}
      <br></br>

      <ul>
        {date.map(x => <li key={x.id}>{x.name}</li>)}
      </ul>
      <br></br>

      {/* 条件渲染 */}
      {flag ? (
        <div>
          <span>This is a span</span>
        </div>) : null}
      <br></br>

      {flag && <span>This is True</span>}
      <br></br>

      {getHtag(1)}
    </div>
  )
}

export default App
