<template>
  <chart class="stock" :constructor-type="'stockChart'" :options="stockOptions" ref="highchart"></chart>
</template>

<script>
export default {
  mounted () {
    this.chart = this.$refs.highchart.chart
    console.log(this.chart)
    this.chart.showLoading()
    setTimeout(function () {
      this.chart.hideLoading()
    }.bind(this), 1000)
  },
  data () {
    return {
      chart: '',
      stockOptions: {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'AAPL Stock Price'
        },
        series: [{
          name: 'AAPL',
          data: [10, 20, 10, 23, 65, 121, 44, 66, 98, 30, 32, 56, 25, 12, 53],
          pointStart: Date.UTC(2018, 1, 1),
          pointInterval: 1000 * 3600 * 24,
          tooltip: {
            valueDecimals: 2
          }
        }]
      }
    }
  }
}
</script>
<style scoped>
  .stock {
    width: 70%;
    margin: 0 auto
  }
</style>
