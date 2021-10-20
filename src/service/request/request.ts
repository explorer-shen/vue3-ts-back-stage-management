import axios, { AxiosInstance } from 'axios'

import { SYQAxiosRequestConfig, interceptorHooks } from './type'
import { ElLoading, ILoadingInstance } from 'element-plus'
export class SYQRequest {
  instance: AxiosInstance
  interceptorHooks?: interceptorHooks
  isShowLoading: boolean
  loading?: ILoadingInstance
  constructor(options: SYQAxiosRequestConfig) {
    this.instance = axios.create(options)
    this.interceptorHooks = options.interceptor
    this.isShowLoading = options.isShowLoading ?? false
    this.setUpInterceptors()
  }

  setUpInterceptors(): void {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config) => {
      if (this.isShowLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      return config
    })
    this.instance.interceptors.response.use((config) => {
      if (this.loading) {
        this.loading.close()
      }
      return config
    }),
      (err: any) => {
        if (this.loading) {
          this.loading.close()
        }
        return err
      }
  }

  request(config: SYQAxiosRequestConfig): Promise<any> {
    this.isShowLoading = config.isShowLoading ?? false
    return new Promise<any>((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config.isShowLoading) {
            this.isShowLoading = false
          }
          resolve(res)
        })
        .catch((err) => {
          if (config.isShowLoading) {
            this.isShowLoading = false
          }
          reject(err)
        })
    })
  }
}
