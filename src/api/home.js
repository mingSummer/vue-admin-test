import request from '../utils/request2'

const icode = '00E6E72FF1D9C578'

export function wordcloud () {
  return request({
    url: '/screen/wordcloud', // 实际需要请求的路径,比如baseURL:www.baidu.com，那么这里就会变成www.baidu.com/test
    method: 'get',
    params: { icode }
  })
}

export function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}

export function screenData () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
