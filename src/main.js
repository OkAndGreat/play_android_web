import {createApp} from 'vue'
import App from './App.vue'
import bus from './bus'
import router from "@/router/index"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/css/base.css'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Vant)
app.config.globalProperties.$bus = bus

app.mount('#app')
