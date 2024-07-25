// Bootstrap

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Custom JS

import './js/color-mode'
// import './js/script'

// Custom CSS

import './assets/main.css'

// Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// TypedJS
// import Typed from 'typed.js'



// Vue starter config
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



// Component
import TypedJSWelcome from './components/TypedJSWelcome.vue'
app.component('TypedJSWelcome', TypedJSWelcome)
