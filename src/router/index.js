import { createRouter, createWebHashHistory } from 'vue-router'
import dayBookRouter from '@/modules/daybook/router'

const routes = [
  {
    path:'/',
    component: ()=> import('../views/Home')
  },
  {
    path:'/daybook',
    ...dayBookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
