<template>
    <common-card
      title="累计订单量"
      :value="orderToday"
    >
      <template>
        <v-chart :options="getOptions()"/>
        <div id="total-orders-chart" :style="{width: '100%', height: '100%'}"/>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">{{orderLastDay}}</span>
      </template>
    </common-card>
</template>

<script>
import commonCardMixin from '@/mixin/commonCardMixin'
import commonDataMixin from '@/mixin/commonDataMixin'
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return this.orderTrend.length > 0 ? {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: this.orderTrend,
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      } : null
    }
  }
}
</script>
