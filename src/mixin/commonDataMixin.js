function format (value) {
  // return (+value).toLocaleString() // toLocalString将数字转为千分位，注意是数字，如果是字符串将失效
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${value}`.replace(reg, '$&,')
}

function wrapperObject (object, key) {
  if (object && key.indexOf('.' >= 0)) { // key中存在‘.’，如果不存在，直接返回
    const keys = key.split('.') // 存在'.'，取出key
    keys.forEach(k => {
      object = object[k]
    })
    return object
  } else {
    return object && object[key] ? object[key] : {}
  }
}

function wrapperArray (object, key) {
  return object && object[key] ? object[key] : []
}

function wrapperNumber (object, key) {
  return object && object[key] ? format(object[key]) : 0
}

function wrapperOriginalNumber (object, key) {
  return object && object[key] ? object[key] : 0
}
function wrapperPercent (object, key) {
  return object && object[key] ? `${object[key]}%` : '0%'
}

function wrapperMoney (object, key) {
  return object && object[key] ? `￥ ${format(object[key])}` : '￥ 0.00'
}

export default {
  computed: {
    reportData () {
      return this.getReportData()
    },
    salesToday () {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay () {
      return wrapperPercent(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth () {
      return wrapperPercent(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay () {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate () {
      return wrapperPercent(this.reportData, 'returnRate')
    },
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber () {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth () {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay () {
      return wrapperPercent(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth () {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    orderFullYear () {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis () {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank () {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear () {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis () {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank () {
      return wrapperArray(this.reportData, 'userRank')
    },
    wordCloud () {
      return this.getWordCloud()
    },
    category1 () {
      return wrapperObject(this.reportData, 'category.data1')
    }, // 针对分类数据
    category2 () {
      return wrapperObject(this.reportData, 'category.data2')
    }, // 针对商品数据
    mapData () {
      return this.getMapData()
    }
  },
  methods: {
    format (v) {
      return format(v)
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
