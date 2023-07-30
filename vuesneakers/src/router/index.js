import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/homePage.vue'
import cartPage from '@/views/cartPage.vue'
import favoritePage from '@/views/favoritePage.vue'
import profilePage from '@/views/profilePage.vue'
import shoesPage from '@/views/shoesPage.vue'
import orderPage from '@/views/orderPage.vue'

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
    },
    {
        path: '/order',
        name: 'orderPage',
        component: orderPage
    },
    {
        path: '/:id',
        name: 'shoesPage',
        component: shoesPage,
        props: true
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
