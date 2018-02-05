import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Indicators from '@/components/Indicators'
import Backup from '@/components/Backup'
import Logs from '@/components/Logs'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        redirect: '/dashboard/indicators',
        children: [
            {
                path: 'indicators',
                component: Indicators
            },
            {
                path: 'backup',
                component: Backup
            },
            {
                path: 'logs',
                component: Logs
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes
})
