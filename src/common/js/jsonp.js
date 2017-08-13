/**
 * Created by Listener on 2017/8/6.
 */
import jsonp from 'jsonp'

function makeParams (data) {
  let params = []
  for (let key in data) {
    const value = data[key] === undefined ? '' : data[key]
    let tmp = `${key}=${encodeURIComponent(value)}`
    params.push(tmp)
  }
  return params.join('&')
}
export default function (url, data, options) {
  const params = makeParams(data)
  url += new RegExp(/(\?|&)$/).test(url) ? params : '?' + params
  console.log(url)
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
