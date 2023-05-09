import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/styles/reset.css'
import router from '@/router/router';

const app = createApp(App)
app.use(router)
app.config.productionTip = false


app.mount('#app')
