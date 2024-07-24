<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue';
import CustomerPolicies from '@/components/Agents/CustomerPolicies.vue';
import { RouterView } from 'vue-router';

</script>
<template>
  <Header />
  <CustomerPolicies/>
  <Footer class="footer"/>
</template> 
