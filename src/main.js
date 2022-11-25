import { createApp } from 'vue'
import App from './App.vue'
import bus from './bus'
import router from "@/router/index"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/css/base.css'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$bus = bus

app.mount('#app')
