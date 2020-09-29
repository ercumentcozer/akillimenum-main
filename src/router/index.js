import Vue from 'vue'
import VueRouter from 'vue-router'
const hakkimizda = () =>
    import ('@/views/hakkimizda.vue');
const kunye = () =>
    import ('@/views/kunye.vue');



Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('@/views/Home.vue')
    },
    {
        path: '/hakkimizda',
        name: 'hakkimizda',
        component: hakkimizda

    },
    {
        path: '/kunye',
        name: 'kunye',
        component: kunye

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router