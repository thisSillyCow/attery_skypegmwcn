import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index';
import home from '@/page/home';
import product from '@/page/product';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/gw',
            name: 'index',
            component: index,
            children: [{
                path: '/',
                name: 'home',
                component: home
            }, {
                path: 'home',
                name: 'home',
                component: home
            }, {
                path: 'product',
                name: 'product',
                component: product
            }, ]
        },
        {
            path: '/',
            redirect: '/gw/home'
        }
    ]
})