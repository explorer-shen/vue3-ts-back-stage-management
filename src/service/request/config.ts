let APP_BASE_URL = ''

if (process.env.NODE_ENV === 'production') {
  APP_BASE_URL = 'a'
} else APP_BASE_URL = '/api'

export const BASE_URL = APP_BASE_URL
export const TIME_OUT = 10000
