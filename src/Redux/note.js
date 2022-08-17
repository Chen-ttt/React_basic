/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-16 18:36:27
 * @LastEditTime: 2022-08-17 15:31:34
 * @LastEditors:  
 */
/**
 * 1. 纯函数
 *   JavaScript 纯函数
 *   每次给相同的参数, 一定返回相同的结果, 不产生副作用
 * 
 *   React中的纯函数
 *   组件都必须像纯函数一样, 保护其props不被修改
 */

/**
 * 2. 为什么需要Redux
 *    a. React的作用: React只是在视图层帮助我们解决了DOM的渲染过程, 帮我们管理视图
 *       我们仍然需要自己管理state, 通过props完成组件之间的通信, 或通过Context进行数据共享
 * 
 *    b. Redux是一个帮助我们管理state的容器, 可以和React, Vue等一起使用
 */

/**
 * 3. Redux的核心概念
 *    Store - 以统一的规范来储存state
 *    Action - 描述如何更新state; 每次数据的变化, 必须通过dispatch来派发一个action来更新
 *             本质是一个JS对象, 描述本次更新的type和content, 实际中写成一个返回action对象的函数
 *    Reducer - 一个纯函数
 *              将store和action联系起来, 接收action, 根据被派发的不同action, 做出不同的操作
 *              返回修改后的新state对象, 而不是使用赋值语句修改state
 */

/**
 * 4. Redux的三大原则
 *    单一数据源 - 整个程序的state都被储存在一棵object tree中, 并且这个object tree只储存在一个store中
 *               Redux并不强制, 但创建多个store不利于数据的维护
 * 
 *    State是只读的 - 唯一修改state的方法一定是触发了action, 这样确保了视图和网络请求都不能直接修改state, 它们只能通过action来描述想要如何修改state
 *                  这样也可以保证所有的修改都被集中化处理, 并且按照严格的顺序来执行, 不需要担心race condition的问题
 * 
 *    使用纯函数来执行修改 - reducer将旧state和action联系在一起, 并返回一个新的state对象
 *                        复杂的应用, 可以将reducer拆分成多个小reducer, 分别操作不同的state tree
 */

/**
 * 5. 核心API
 *    a. createStore(reducer)
 *    b. store.dispatch(action()) 派发action给store, 在内部调用reducer去接收action 并执行相应修改
 *    c. store.getState() 获取store中所有数据
 *    d. store.subscribe(回调函数) 订阅store的变化, 只要store发生改变, 回调函数就会执行
 */

/**
 * 6. react-redux
 *    a. Provider - 将store传递给子组件
 *    b. connect(mapStateToProps, mapDispatchToProps)(子组件)
 */

/**
 * 7. 异步请求 - 中间件
 *    以上的redux中保存的数据都是本地定义的, 只能进行同步操作; 如果需要异步操作, 如从服务器请求数据等, 可以将网络请求放在componentDidMount中进行, 再dispatch action
 *    但这样一来, 组件会变的越来越复杂, 请求的数据也无法在redux中维护, 因此需要使用中间件Middleware
 * 
 *    Redux中的中间件, 目的是在action和reducer之间扩张一些功能, 如调用异步接口, 日志记录等
 */


/**
 * 8. redux-thunk
 *    使dispatch(action)中的action也可以是一个函数, 被调用时, 给该函数传入两个参数:
 *      a. dispatch函数 - 用于再次派发action
 *      b. getState函数 - 用于获取原来的state, 因为一些操作可能依赖于原来的状态
 * 
 *    // 通过applyMiddleware来结合多个中间件, 并将其传入第二个参数
 *    store = createStore(reducer, applyMiddleware(thunk))
 * 
 *    // 同步action是直接返回对象, 再dispatch对象
 *    // 异步action是先请求数据, 数据拿到后再用dispatch重新派发action
 *    action = (dispatch, getState) => {
 *        axios({}).then(res => {
 *            dispatch({...}) // 再次派发dispatch
 *        })
 *    }
 */

/**
 * 9. Reducer拆分
 *    
 */