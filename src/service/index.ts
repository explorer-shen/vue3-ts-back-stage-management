import { SYQRequest } from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'
import cache from '@/utils/LocalCache'
import { AxiosRequestConfig } from 'axios'

const syqRequest = new SYQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  isShowLoading: true,
  interceptor: {
    requestInterceptor: (config: AxiosRequestConfig) => {
      const token = cache.getCache('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    }
  }
})

export default syqRequest
