<template>
  <chart :options="chartOptions"></chart>
</template>

<script>
export default {
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Sin chart'
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5],
          color: '#6fcd98'
        }]
      }
    }
  }
}
</script>

<style></style>
