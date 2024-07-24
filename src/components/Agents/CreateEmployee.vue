<script setup lang="ts">
import EmployeeSignup from '../Signup/EmployeeSignup.vue';
</script>
<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Employee Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <EmployeeSignup/>
      </div>
    </div>
  </div>
</div>
</template>
