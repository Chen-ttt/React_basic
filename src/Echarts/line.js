/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-20 22:48:54
 * @LastEditTime: 2022-08-20 23:36:04
 * @LastEditors:  
 */

/**
 * Echarts
 */

import * as echarts from "echarts"
import { useEffect } from "react"
import { option } from "./options"

function LineChart () {
  useEffect(() => {
    let myChart = echarts.init(document.getElementById('lineChartBlank'))
    option && myChart.setOption(option)
  })

  return (
    <div id="lineChartBlank" style={{ width: '800px', height: '600px' }}></div>
  )
}

export {
  LineChart
}