import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.use(createPinia())
app.use(router)

app.mount('#app')
