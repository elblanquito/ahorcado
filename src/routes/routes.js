import Login from "../components/login.vue" 
import Menu from "../components/menu.vue"
import Juego from "../components/juego.vue"
import Desarrollo from "../components/desarrollo.vue"


import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {path: "/",component: Login,},
    {path: "/menu",component: Menu,},
    {path: "/juego",component: Juego,},
    {path: "/desarrollo",component: Desarrollo,},
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})

