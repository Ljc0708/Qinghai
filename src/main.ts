import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { User, Lock } from '@element-plus/icons-vue'

createApp(App).component('user', User).component('lock', Lock).use(store).use(router).use(ElementPlus).mount('#app')