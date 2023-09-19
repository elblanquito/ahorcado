import { createApp } from 'vue'
import VueRouter from 'vue-router'
import './style.css'
import App from './App.vue'
import juego from './components/juego.vue'
import desarrollo from './components/desarrollo.vue'


createApp(App).mount('#app')
createApp(juego).mount('#juego')
createApp(desarrollo).mount('#desarrollo')

