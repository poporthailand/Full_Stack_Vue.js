import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/components/homePage.vue'
import makeOrder from '@/components/makeOrder.vue'
import checkStock from '@/components/checkStock.vue'
import historySale from '@/components/historySale.vue'
import insertProduct from '@/components/insertProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/makeOrder',
    name: 'makeOrder',
    component: makeOrder
  },
  {
    path: '/checkStock',
    name: 'checkStock',
    component: checkStock
  },
  {
    path: '/insertProduct/:id',
    name: 'insertProduct',
    component: insertProduct
  },
  
  {
    path: '/historySale',
    name: 'historySale',
    component: historySale
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
