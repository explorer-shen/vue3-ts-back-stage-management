import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface interceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface SYQAxiosRequestConfig extends AxiosRequestConfig {
  interceptor?: interceptorHooks
  isShowLoading?: boolean
}
