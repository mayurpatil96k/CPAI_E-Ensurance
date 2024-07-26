import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import AgentSignup from '@/components/Signup/AgentSignup.vue'
import CustomerSignup from '@/components/Signup/CustomerSignup.vue'
import AdminSignup from '../components/Signup/AdminSignup.vue'
import EmployeeSignup from '../components/Signup/EmployeeSignup.vue'
import Login from '../views/Login.vue'
import AdminLogin from '@/components/Login/AdminLogin.vue'
import CustomerPolicies from '../components/Agents/CustomerPolicies.vue'
import MyPolicy from '../components/Policies/MyPolicy.vue'
import EmployeeLogin from '@/components/Login/EmployeeLogin.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import Employee from '@/components/Agents/Employee.vue'
import Agent from '@/components/Agents/Agent.vue'
import EmployeeDashboard from '@/views/EmployeeDashboard.vue'
import Scheme from '@/components/Employee/Scheme.vue'
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
        {
          path: '/Login/EmployeeLogin',
          name: 'EmployeeLogin',
          component: EmployeeLogin,
        },
        
      ]
    },
    {
      path:'/admin',
      name:'AgentDashboard',
      component:AdminDashboard,
      children:[{
        path: '/admin/customer',
          name: 'CustomerPolicies',
          component: CustomerPolicies,
      },
      {
        path: '/admin/employee',
          name: 'Employee',
          component: Employee,
      },
      {
        path: '/admin/Agent',
          name: 'Agent',
          component: Agent,
      },
    ]
    },
    {
      path:'/customer',
      name:'CustomerPolicies2',
      component:CustomerPolicies,
      
    },
    {
      path:'/Employee',
      name:'EmployeeDashboard',
      component:EmployeeDashboard,
      children:[
        {
          path: '/Employee/scheme',
          name: 'scheme',
          component: Scheme,
        }
      ]
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
