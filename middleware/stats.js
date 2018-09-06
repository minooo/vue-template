// import axios from "axios"

// export default function ({ route }) {
//   return axios.post('http://my-stats-api.com', {
//     url: route.fullPath
//   })
// }

export default function (context) {
  console.log("from middleware/stats")
}
