/**
 * Created by Listener on 2017/8/6.
 */
import { commonParams, commonOptions } from 'api/config'
import jsonp from 'common/js/jsonp'

export const getRecommendData = function () {
  const prefix = 'GetRecomListCallback'
  const rnd = Math.round(Math.random() * 1e18)
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'
  const data = Object.assign({}, commonParams, {
    tpl: 'v12',
    page: 'other',
    rnd: rnd,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    loginUin: 0,
    hostUin: 0
  })
  const options = Object.assign({}, commonOptions, {
    prefix,
    name: prefix + rnd
  })
  return jsonp(url, data, options)
}
