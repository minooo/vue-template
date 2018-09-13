// 中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前/路由变化前。
// import axios from "axios"

// export default function ({ route }) {
//   return axios.post('http://my-stats-api.com', {
//     url: route.fullPath
//   })
// }

export default function (context) {
  console.log("from middleware/stats")
}
