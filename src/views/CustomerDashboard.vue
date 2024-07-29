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
              :class="{ 'u-color': true, 'active-link': isActive('/agent/plan') }"
              to="/agent/plan"
              >Plan</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >Customer</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="mr-md-3"
              :class="{ 'u-color': true, 'active-link': isActive('/agent/customer') }"
              to="/agent/customer"
              >Commission</router-link
            >
          </li>
        </ul>
        <button class="btn btn-outline-light" type="submit" @click="logoutfun">Logout</button>
      </div>
    </div>
  </nav>

  <div class="container my-4">
    <div class="row ">
      <div class="col-md-6">
        
        <div class="new-content d-flex align-content-center justify-content-center ">
          <span class="fs-1 gradient-text">Let's find you the <br />Best Insurance</span>
        </div>
      </div>
      <div class="col-md-6">
        <div
          id="carouselExampleSlidesOnly"
          data-bs-interval="3000"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/cor2.avif" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/cor.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/cor3.png" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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

.gradient-text {
      font-weight: bold;
      background: linear-gradient(to right, #ff0000, #0000ff); 
      -webkit-background-clip: text;
      color: transparent;
    }
</style>
