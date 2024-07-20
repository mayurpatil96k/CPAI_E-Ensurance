import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import AgentSignup from '@/components/Signup/AgentSignup.vue'
import CustomerSignup from '@/components/Signup/CustomerSignup.vue'
import AdminSignup from '../components/Signup/AdminSignup.vue'
import EmployeeSignup from '../components/Signup/EmployeeSignup.vue'
import Login from '../views/Login.vue'
import AdminLogin from '@/components/Login/AdminLogin.vue'
<<<<<<< HEAD


=======
import CustomerPolicies from '../components/Policies/CustomerPolicies.vue'
import MyPolicy from '../components/Policies/MyPolicy.vue'
>>>>>>> 7c0ae42054d1099c728374222a40b0bc61eb4dc8
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
    {
      path:'/Login',
      name:'Login',
      component:Login,
      children:[
        {
          path: '/Login/adminLogin',
          name: 'adminLogin',
          component: AdminLogin,
        },
        
      ]
    },
    {
      path:'/CustomerPolicies',
      name:'CustomerPolicies',
      component:CustomerPolicies,
    },
    {
      // temp routing...
      path:'/Mypolicy',
      name:'mypolicy',
      component:MyPolicy,
    }
  ]
})

export default router
