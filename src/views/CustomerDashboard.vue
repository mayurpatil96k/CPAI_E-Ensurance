<script lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import router from '@/router'

export default {
  setup() {
    const route = useRoute()

    const isActive = (path: string) => {
      return route.path === path
    }
    const logoutfun = () => {
      localStorage.clear()
      router.push('/login/adminlogin')
    }

    return { isActive, logoutfun }
  }
}
</script>

<template>
  <nav class="navbar pr-md-5 navbar-expand-lg navbar-light" style="background-color: #13344b">
    <div class="container-fluid">
      <a class="navbar-brand u-color" href="#">EInsurance</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/customer/home') }"
              to="/customer/home"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >Scheme</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >Payments</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >Contact</router-link
            >
          </li>
        </ul>
        <button class="btn btn-outline-light" type="submit" @click="logoutfun">Logout</button>
      </div>
    </div>
  </nav>


  <RouterView/>

  <footer class="text-light py-2" style="background-color: #13344b">
    <div class="container text-center">
      <p class="">&copy; 2024 CPAI_E_INSURANCE. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.u-color {
  color: white !important;
}

.navbar {
  width: 100%;
}

.active-link {
  font-weight: bold;
}

</style>
