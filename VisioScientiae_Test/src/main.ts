import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import CKEditor from '@ckeditor/ckeditor5-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(CKEditor)


app.mount('#app')