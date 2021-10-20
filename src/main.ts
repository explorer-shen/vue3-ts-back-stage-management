import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import { store, setUpLocal } from './store'
import router from '@/router'

import 'normalize.css'
import '@/assets/css/index.css'

const app = createApp(App)
setUpLocal()
app.use(ElementPlus)
app.use(store)
app.use(router)

app.mount('#app')
