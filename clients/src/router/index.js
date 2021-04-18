import { createRouter, createWebHistory } from 'vue-router'
import createComponent from '@/components/createComponent.vue'
import editComponent from '@/components/editComponent.vue'
import listComponent from '@/components/listComponent.vue'
import homePage from '@/components/homePage.vue'
import makeOrder from '@/components/makeOrder.vue'
import checkStock from '@/components/checkStock.vue'
import historySale from '@/components/historySale.vue'



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
    path: '/historySale',
    name: 'historySale',
    component: historySale
  },
  {
    path: '/view',
    name: 'view',
    component: listComponent
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: editComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router