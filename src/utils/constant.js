/**
 * Created by Ninghai on 2018/5/7.
 */
/**
 * 接口地址
 * @type {string}
 */
export const servicerUrl = 'https:'

export const chartBasicOptions = {
  lang: {
    loading: '加载中...'
  },
  chart: {
    backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(240, 240, 255)']
      ]
    },
    borderColor: '#EBBA95',
    borderRadius: 20,
    borderWidth: 2,
    plotBackgroundColor: 'rgba(255, 255, 255, .9)',
    plotShadow: true,
    plotBorderWidth: 1
  },
  credits: {
    text: 'www.ssymmetry.com',
    href: 'https://www.ssymmetry.com',
    position: {
      align: 'right'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top'
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false
      }
    }
  },
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  },
  style: {
    fontFamily: '',
    fontSize: '',
    fontWeight: '',
    color: '#2f2'
  }
}
