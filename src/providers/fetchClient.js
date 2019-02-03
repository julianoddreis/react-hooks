import axios from 'axios'
// import { getToken } from '../helpers/auth'

export const __API__ = 'http://todo-list-hooks-api.herokuapp.com'

const defaultOptions = {
  baseURL: __API__
}

let instance = axios.create(defaultOptions)

// instance.interceptors.request.use(config => {
//   config.headers.Authorization = 'Bearer ' + getToken()
//   return config
// })

// instance.interceptors.response.use(
//   function (response) {
//     return response
//   },
//   error => {
//     console.log(error)
//     if (
//       error &&
//       error.response &&
//       error.response.status === 401 &&
//       window.location.pathname !== '/login'
//     ) {
//       window.location.href = '/login'
//     } else {
//       return Promise.reject(error)
//     }
//   }
// )

export default instance
