<script setup lang="ts">
import PolicyCard from './PolicyCard.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4" v-for="n in 20" :key="n">
        <div class="d-flex justify-content-center">
          <PolicyCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    margin-top: 20px;
  }
</style>
