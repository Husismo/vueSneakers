import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/homePage.vue'
import cartPage from '@/views/cartPage.vue'
import favoritePage from '@/views/favoritePage.vue'
import profilePage from '@/views/profilePage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage
    },
    {
        path: '/cart',
        name: 'cart',
        component: cartPage
    },
    {
        path: '/favorite',
        name: `favorite`,
        component: favoritePage
    },
    {
        path: '/profile',
        name: 'profile',
        component: profilePage
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
