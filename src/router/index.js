import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
