<script lang="ts">
import { defineComponent, toRefs, reactive, watch } from 'vue'

export default defineComponent({
  props: {
    customer: {
      type: Object as () => { name: string, username: string,phone:string, email: string, password?: string; password_confirmation?: string; id?: number },
      required: true
    },
    isDialogOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['closeDialog'],
  setup(props, { emit }) {
    const { customer, isDialogOpen } = toRefs(props)
    const localCustomer = reactive({ ...customer.value })

    watch(customer, (newVal) => {
      Object.assign(localCustomer, newVal)
    }, { deep: true })

    const closeDialog = () => {
      emit('closeDialog');
      console.log(localCustomer)
    }

    const submitForm = () => {
      // Logic to save the edited employee details
      console.log('Employee details saved', localCustomer)
      closeDialog()
    }

    return {
      localCustomer,
      isDialogOpen,
      closeDialog,
      submitForm
    }
  }
})
</script>

<template>
  <div v-if="isDialogOpen" class="modal fade show d-block" tabindex="-1" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editEmployeeModalLabel">Edit Employee</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeDialog"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input type="text" v-model="localCustomer.name" class="form-control" id="name" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input type="email" v-model="localCustomer.email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone:</label>
              <input type="text" v-model="localCustomer.phone" class="form-control" id="phone" />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Username:</label>
              <input type="text" v-model="localCustomer.username" class="form-control" id="username" />
            </div>
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-success w-25">Save</button>
              <button type="button" class="btn btn-danger w-25" @click="closeDialog">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
