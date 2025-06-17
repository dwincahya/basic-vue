import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)
app.component('GlobalComponent', GlobalComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')
