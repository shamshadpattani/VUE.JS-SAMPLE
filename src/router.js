import Vue from 'vue'
import Router from 'vue-router'
import Customer from './components/Customer'
import CustomerDetails from './components/CustomerDetails'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/customer'
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/customerdetails/:id',
      name: 'customerdetails',
      component: CustomerDetails
    }
  ]
})
export default router
