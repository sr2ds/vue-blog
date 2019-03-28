import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import Login from '@/components/Admin/Login'
import CreateArticle from '@/components/Admin/Article/Create'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        //  { path: '*', component: App },
        { path: '/admin/login', component: Login },
        { path: '/admin/article/create', component: CreateArticle },
    ]
})

export default router;