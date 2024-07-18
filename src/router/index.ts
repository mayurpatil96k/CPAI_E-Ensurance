import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import AgentSignup from '@/components/Signup/AgentSignup.vue'
import CustomerSignup from '@/components/Signup/CustomerSignup.vue'
import AdminSignup from '@/components/Signup/AdminSignup.vue'
import EmployeeSignup from '@/components/Signup/EmployeeSignup.vue'
//Hello just checking 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      children: [
        {
          path: '/signup/agentsignup',
          name: 'AgentSignup',
          component: AgentSignup
        },
        {
          path: '/signup/customersignup',
          name: 'CustomerSignup',
          component: CustomerSignup
        },
        {
          path: '/signup/AdminSignup',
          name: 'AdminSignup',
          component: AdminSignup
        },
        {
          path: '/signup/EmployeeSignup',
          name: 'EmployeeSignup',
          component: EmployeeSignup
        }
      ]
    },
  ]
})

export default router
