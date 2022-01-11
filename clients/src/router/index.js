import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '*',
    //   component: () => import(/* webpackChunkName: "all" */ '@/views/Error.vue')
    // },
    // {
    //   path: '/ma/*',
    //   component: () => import('@/views/Admin/Error.vue')
    // },
    {
      path: '/',
      components: {
        default: () => import(/* webpackChunkName: "client" */ '@/layouts/App.vue')
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
        },
        {
          path: 'about',
          name: 'ClientAbout',
          component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
        }
      ]
    }
  ]
})

export default router
