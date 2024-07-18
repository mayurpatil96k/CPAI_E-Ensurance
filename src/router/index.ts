import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Signup,
      children: [
        {
          path: '/agentsignup',
          name: 'AgentSignup',
          component: () => import('../components/Signup/AgentSignup.vue')
        },
        {
          path: '/customersignup',
          name: 'CustomerSignup',
          component: () => import('../components/Signup/CustomerSignup.vue')
        },
        {
          path:'/AdminSignup',
          name:'AdminSignup',
          component:()=>import('../components/Signup/AdminSignup.vue')
        },
        {
          path:'/EmployeeSignup',
          name:'EmployeeSignup',
          component:()=>import('../components/Signup/EmployeeSignup.vue')
        }

      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Signup // Use the imported CreateView component
    }
  ]
})

export default router
