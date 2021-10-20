class cache {
  setCache(key: string, value: any) {
    return window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)

    if (value && value !== 'undefined') {
      return JSON.parse(value)
    }
  }
  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }
  cleanCache() {
    window.localStorage.clear()
  }
}
export default new cache()
