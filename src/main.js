import { createApp } from 'vue'
import App from './App.vue'
import bus from './bus'
import router from "@/router/index";

const app = createApp(App)

app.use(router)
app.config.globalProperties.$bus = bus

app.mount('#app')
