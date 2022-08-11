/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-11 15:24:41
 * @LastEditTime: 2022-08-11 16:58:25
 * @LastEditors:  
 */

// 每个被伪造的数据都包含3部分
// "属性名｜生成规则: 属性值"
var Mock = require('mockjs')
var data = Mock.mock("/mock", {
  "centreInfo|4": [{   			//生成一个数组, 包含4个如下格式的数据项
    "id|+1": 1, 						//数字从1开始，后续依次加1
    "name": "@name",			//随机生成姓名
    "age|18-28": 25, 			//年龄是18-28之间的随机数
    "zip": "@zip",
    // 可以使用函数, 但是必须是function关键字声明, 如果使用箭头函数, 则this为undefined
    'region': function () {
      return "S" + this.age
    },
    "sex|1": ["男", "女"],	 //性别是数组里的随机一项
    "job|1": ["web", "teacher", "python", "php"]   //job是数组里的随机一项
  }]
})

/**
 * 占位符@
 *   @后面跟上一些Mock.Random的固定方法, 用来生成随机数据
 */

/**
 * 7种生成规则:
 *  1. 'name|min-max': value
 *     Eg. 'list|1-5: ['hello']'
 *     随机生成1到5个 'hello'元素, 组成一个数组
 * 
 *     'name|min-max': object
 *     随机从object中选取min到max个 属性, object换成array则从数组里随机选
 *  
 *  2. 'name|count': value
 *     Eg. 'list|3: ['hello']'
 *     生成3个 'hello'元素, 组成一个数组
 * 
 *     'name|count': object
 *     随机从object中选取min到max个 属性, object换成array则从数组里随机选
 * 
 *     'name|+1': array
 *     从array中顺序选取1个元素作为最终值
 * 
 *  3. 'age|min-max.dmin-dmax': value
 *     Eg. 'list|1-100.1-3: 1
 *     当value是一个number类型, 生成一个浮点数; 该浮点数的整数部分处于区间[min, max], 小数部分保留dmin - dmax位
 *     !!!注意. 生成的数字和value的值大小无关, value只是为了确定数据类型, 具体是几无所谓
 *     因此这个例子可能生成5.858或68.12...
 * 
 * 4. 'age|count.dmin-dmax': value
 *    整数部分等于count, 其他同上
 * 
 * 5. 'age|min-max.dcount': value
 *    小数部分保留dcount位, 其他同上
 * 
 * 6. 'age|count.dcount': value
 *    整数部分等于count, 小数部分保留dcount位, 其他同上
 * 
 * 7. 'age|+step': value
 *    当value为数字时，初始值为value，每次得到的结果会自增step
 */

export default data