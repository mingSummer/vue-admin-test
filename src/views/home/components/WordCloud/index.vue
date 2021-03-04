<template>
    <ve-wordcloud :data="chartData" height="100%"></ve-wordcloud>
</template>

<script>
import commonDataMixin from '@/mixin/commonDataMixin'
export default {
  mixins: [commonDataMixin],
  name: 'index',
  watch: {
    wordCloud () {
      const data = []
      this.wordCloud.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  },
  data () {
    return {
      chartData: {}
    }
  }
}
</script>

<style scoped>

</style>
