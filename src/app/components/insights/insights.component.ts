import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'dashboard-ui-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initCharts();
    }, 2000); // by the time the mosaic card hasn't rendered properly, so we have to wait
  }

  private initCharts(): void {
    this.initChart1();
    this.initChart2();
    this.initChart3();
  }

  private initChart1(): void {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 10,
      //   data: ['Arrival', 'Ads', 'Searching Engine', 'Email Sales', 'Allies Ads', 'Video Ads', 'Baidu', 'Google', 'Bing', 'Other']
      // },
      series: [
        {
          name: 'Visiting Source',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '40%'],

          label: {
            position: 'inner'
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 335, name: 'Arrival', selected: true},
            {value: 679, name: 'Ads'},
            {value: 1548, name: 'Searching Engine'}
          ]
        },
        {
          name: 'Visiting Source',
          type: 'pie',
          radius: ['60%', '80%'],
          label: {
            normal: {show: false},
            emphasis: {
              show: true,
              // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              // backgroundColor: '#eee',
              // borderColor: '#aaa',
              // borderWidth: 1,
              // borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              // rich: {
              // a: {
              //   color: '#999',
              //   lineHeight: 22,
              //   align: 'center'
              // },
              // abg: {
              //     backgroundColor: '#333',
              //     width: '100%',
              //     align: 'right',
              //     height: 22,
              //     borderRadius: [4, 4, 0, 0]
              // },
              // hr: {
              //   borderColor: '#aaa',
              //   width: '100%',
              //   borderWidth: 0.5,
              //   height: 0
              // },
              // b: {
              //   fontSize: 16,
              //   lineHeight: 33
              // },
              // per: {
              //   color: '#eee',
              //   backgroundColor: '#334455',
              //   padding: [2, 4],
              //   borderRadius: 2
              // }
              // }
            }
          },
          data: [
            {value: 335, name: 'Arrival'},
            {value: 310, name: 'Email Sales'},
            {value: 234, name: 'Allies Ads'},
            {value: 135, name: 'Video Ads'},
            {value: 1048, name: 'Baidu'},
            {value: 251, name: 'Google'},
            {value: 147, name: 'Bing'},
            {value: 102, name: 'Other'}
          ]
        }
      ]
    };

    const chart: any = document.getElementById('chart1');
    const chartObj = echarts.init(chart, 'light');
    chartObj.setOption(option);

  }

  private initChart2(): void {
    const colors = ['#5793f3', '#d14a61', '#675bba'];
    const option = {
      color: colors,

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      legend: {
        data: ['Sales', 'Decrease', 'Ave. Count']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Sales',
          min: 0,
          max: 250,
          position: 'right',
          axisLine: {
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Decrease',
          min: 0,
          max: 250,
          position: 'right',
          offset: 80,
          axisLine: {
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Count',
          min: 0,
          max: 25,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name: 'Decrease',
          type: 'bar',
          yAxisIndex: 1,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: 'Ave. Count',
          type: 'line',
          yAxisIndex: 2,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };

    const chart: any = document.getElementById('chart2');
    const chartObj = echarts.init(chart, 'light');
    chartObj.setOption(option);
  }

  private initChart3(): void {

    const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
      '7a', '8a', '9a', '10a', '11a',
      '12p', '1p', '2p', '3p', '4p', '5p',
      '6p', '7p', '8p', '9p', '10p', '11p'];
    const days = ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

    let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
    data = data.map((item) => {
      return [item[1], item[0], item[2]];
    });

    const option = {
      title: {
        text: '',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
      },
      legend: {
        data: ['Punch Card'],
        left: 'right'
      },
      tooltip: {
        position: 'top',
        formatter: (params) => {
          return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
      },
      grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: (val) => {
          return val[2] * 2;
        },
        data: data,
        animationDelay: (idx) => {
          return idx * 5;
        }
      }]
    };
    const chart: any = document.getElementById('chart3');
    const chartObj = echarts.init(chart, 'light');
    chartObj.setOption(option);

  }

}
