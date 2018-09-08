import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard/Layout'),
        children: [
            {
                path: 'indicators',
                name: 'dashboard.indicators',
                component: () => import('../views/Dashboard/Indicators')
            },
            {
                path: 'backup',
                name: 'dashboard.backup',
                component: () => import('../views/Dashboard/Backup')
            },
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: () => import('../views/Dashboard/Logs')
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
