<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeButton = ref('')

const navigateTo = (routeName: string) => {
  activeButton.value = routeName
  router.push({ name: routeName })
}

watch(() => route.name, (newRoute) => {
  if (typeof newRoute === 'string') {
    activeButton.value = newRoute
  }
}, { immediate: true }) 
</script>

<template>
  <div class="container u-height d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-body border border-danger border-5 rounded-3">
        <div class="d-flex justify-content-center mb-3 text-center">
          <h3><strong>Create Account For</strong></h3>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-around mb-3">
          <span 
            @click="navigateTo('AdminSignup')" 
            :class="['text-link', activeButton === 'AdminSignup' ? 'active' : '']"
          >Admin</span>
          <span 
            @click="navigateTo('AgentSignup')" 
            :class="['text-link', activeButton === 'AgentSignup' ? 'active' : '']"
          >Agent</span>
          <span 
            @click="navigateTo('CustomerSignup')" 
            :class="['text-link', activeButton === 'CustomerSignup' ? 'active' : '']"
          >Customer</span>
          <span 
            @click="navigateTo('EmployeeSignup')" 
            :class="['text-link', activeButton === 'EmployeeSignup' ? 'active' : '']"
          >Employee</span>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>


<style scoped>
.text-link {
  cursor: pointer;
  text-decoration: none;
  color: black; 
  padding: 5px 0;
}

.text-link:hover {
  color: red; 
}

.text-link.active {
  color: red; 
}
.text-link:hover {
  color: darkred; 
}
.u-height {
  min-height: 100vh;
}

.shadow-red {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}

.card {
  width: 500px; 
  margin: 0 auto; 
}

.text-link {
  cursor: pointer;
  text-decoration: none;
  color: black; 
  border-bottom: 2px solid transparent; 
  padding: 5px 0;
}

.text-link:hover {
  border-bottom-color: red; 
}

.text-link.active {
  border-bottom-color: red; 
}

@media (max-width: 767px) {
  .card {
    width: 100%; 
    max-width: 500px; 
  }

  .text-link {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
