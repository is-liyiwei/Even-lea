import getUrlByObject from './getUrlByObject'
import { cloneDeep } from 'lodash'

function fixOpts(options) {
  if (options.query) {
    options.url = options.url.split('?')[0]
    if (
      options.query.hasOwnProperty('page') &&
      options.query.hasOwnProperty('take')
    ) {
      let _query = cloneDeep(options.query)
      _query.list = []
      // 安卓上的不会对中文进行 encode 导致请求错误
      options.url += `?${getUrlByObject(_query)
        .map(encodeURI)
        .join('&')}`
    } else {
      // 安卓上的不会对中文进行 encode 导致请求错误
      options.url += `?${getUrlByObject(options.query)
        .map(encodeURI)
        .join('&')}`
    }
    delete options.query
  }
  return options
}

// function fixOpts(options) {
//   if (options.query) {
//     if (!!options.query.page && !!options.query.take) {
//       options.query.list = [];
//     }
//     options.url = options.url.split("?")[0];
//     // 安卓上的不会对中文进行 encode 导致请求错误
//     for (const key in options.query) {
//       if (options.query.hasOwnProperty(key)) {
//         options.query[key] = encodeURIComponent(options.query[key]) || [];

//         if (
//           key == "page" ||
//           key == "take" ||
//           key == "epochFrom" ||
//           key == "epochTo" ||
//           key == "totalNum"
//         ) {
//           options.query[key] = options.query[key] * 1;
//         }
        
//         // console.log(key);
//         // console.log(options.query[key]);
//       }
//     }
//     options.url += `?${getUrlByObject(options.query).join("&")}`;
//     delete options.query;
//   }
//   return options;
// }

export default fixOpts
