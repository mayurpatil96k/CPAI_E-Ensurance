<!-- <script setup>
import { ref } from 'vue'
import EmployeeSignup from '../Signup/EmployeeSignup.vue';

const closeModal = () => {
  const modalElement = document.getElementById('exampleModal')
  const modalInstance = bootstrap.Modal.getInstance(modalElement)
  if (modalInstance) {
    modalInstance.hide()
  }
}
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
          <EmployeeSignup @submitSuccess="closeModal"/>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Employee Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <EmployeeSignup @submitSuccess="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EmployeeSignup from '../Signup/EmployeeSignup.vue';

export default defineComponent({
  components: {
    EmployeeSignup
  },
  methods: {
    closeModal() {
      const modalElement = document.getElementById('exampleModal') as HTMLElement;
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
});
</script>
