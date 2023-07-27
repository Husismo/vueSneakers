import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from "../views/homePage.vue"
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: homePage
    }
]

const router = new VueRouter({
    mode: `history`,
    base: "/home",
    routes,
})

export default router