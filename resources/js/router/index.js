import { createRouter, createWebHistory } from "vue-router";
import notFound from '../components/NotFound.vue'
import invoiceIndex from '../components/invoices/index.vue'
const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router