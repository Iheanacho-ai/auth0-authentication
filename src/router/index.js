import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'

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
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;