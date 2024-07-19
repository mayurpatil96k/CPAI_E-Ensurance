<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeButton = ref('')

const navigateTo = (routeName: string) => {
  activeButton.value = routeName
  router.push({ name: routeName })
}
</script>

<template>
  <div class="container u-height d-flex align-items-center justify-content-center">
    <div class="card w-100 w-md-75 rounded-3 shadow-red">
      <div class="card-body border border-danger border-5 rounded-3">
        <div class="d-flex flex-column flex-md-row justify-content-around mb-3">
          <button 
            @click="navigateTo('AdminSignup')" 
            :class="['btn btn-sm', activeButton === 'AdminSignup' ? 'btn-danger' : 'btn-outline-danger']"
          >Admin</button>
          <button 
            @click="navigateTo('AgentSignup')" 
            :class="['btn btn-sm', activeButton === 'AgentSignup' ? 'btn-danger' : 'btn-outline-danger']"
          >Agent</button>
          <button 
            @click="navigateTo('CustomerSignup')" 
            :class="['btn btn-sm', activeButton === 'CustomerSignup' ? 'btn-danger' : 'btn-outline-danger']"
          >Customer</button>
          <button 
            @click="navigateTo('EmployeeSignup')" 
            :class="['btn btn-sm', activeButton === 'EmployeeSignup' ? 'btn-danger' : 'btn-outline-danger']"
          >Employee</button>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.u-height {
  min-height: 100vh;
}

.shadow-red {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}

@media (max-width: 767px) {
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
