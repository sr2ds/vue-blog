import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import Login from '@/components/Admin/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        //  { path: '*', component: App },
        { path: '/admin/login', component: Login }
    ]
})

export default router;