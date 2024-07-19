<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  
  <div class="mw-75 u-height  d-flex align-items-center justify-content-center">
    <div class="mw-75 card">
      <div class="card-body">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped>
.u-height{
  min-height: 100vh;
}
</style>
