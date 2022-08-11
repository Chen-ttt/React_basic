/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-11 15:24:41
 * @LastEditTime: 2022-08-11 18:58:58
 * @LastEditors:  
 */

var Mock = require('mockjs')
var centreData = Mock.mock("/centreMock", {
  "centreInfo|3": [{
    // 1. Unique ID
    "ID|+1": 1,

    // 2. name
    "name|+1": ["Welfare Pharmacy", "Stubley Medical Centre", "Page Hall Pharmacy"],

    // 3. address
    "address": function () {
      return "S" + Mock.Random.integer(1, 5) + " " + Mock.Random.integer(1, 5) + Mock.Random.string("upper", 2)
    },

    // 4. email
    "email": "tchen64@sheffield.ac.uk",

    // 5. phone
    "phone": function () {
      return Mock.Random.pick(["0114", "0161"]) + Mock.mock(/ \d{3} \d{4}/)
    },

    // 6. centreLLevel
    "centreLevel|1-5": 1,

    // 7. population
    "population": function () {
      if (this.areaLevel === 1) return Mock.Random.integer(20, 100)
      else if (this.areaLevel === 2) return Mock.Random.integer(101, 300)
      else if (this.areaLevel === 3) return Mock.Random.integer(301, 600)
      else if (this.areaLevel === 4) return Mock.Random.integer(601, 1000)
      else if (this.areaLevel === 5) return Mock.Random.integer(1001, 1500)
    },

    // 8. max storage
    "maxStorage": function () {
      return this.centreLevel * 30
    },

    // 9. initial number of vaccines
    "initVaccine|40-600": 1
  }]
})

export default centreData