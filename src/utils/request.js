import axios from 'axios'
const service = axios.create({
    baseURL: 'http://console.llwell.net',
    timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
      config.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          ...config.headers
      }
      return config
  },
  error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
  }
)
service.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
      error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
