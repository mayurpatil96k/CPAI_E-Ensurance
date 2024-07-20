<script setup lang="ts">
import PolicyCard from './PolicyCard.vue';
import Header from '../Header.vue'
import Footer from '../Footer.vue'
</script>

<template>
    <Header/>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4" v-for="n in 20" :key="n">
        <div class="d-flex justify-content-center">
          <PolicyCard />
        </div>
      </div>
    </div>
  </div>
  <Footer/>

</template>

<style scoped>
  .container {
    margin-top: 20px;
  }
  .u-color{
    color: white !important;
  }
</style>
