import { createRouter, createWebHistory } from 'vue-router'
import InvoiceList from '../views/InvoiceList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/invoiceList',
      name: 'InvoiceList',
      component: InvoiceList
    },
    {
      path: '/Invoice1',
      name: 'InvoiceOne',
      component: () => import('../views/InvoiceOne.vue')
    },
    {
      path: '/Invoice2',
      name: 'InvoiceTwo',
      component: () => import('../views/InvoiceTwo.vue')
    },
    {
      path: '/',
      name: 'SalesInvoice',
      component: () => import('../views/SalesInvoice.vue')
    }
  ]
})

export default router
