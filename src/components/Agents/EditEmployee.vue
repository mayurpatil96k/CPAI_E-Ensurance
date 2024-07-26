<template>
  <div v-if="isDialogOpen" class="edit-dialog">
    <div class="edit-dialog-content">
      <h2>Edit Employee</h2>
     <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="localCustomer.name" id="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="localCustomer.email" id="email" />
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input type="text" v-model="localCustomer.phone" id="phone" />
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="localCustomer.username" id="username" />
        </div>
        <button type="submit">Save</button>
        <button type="button" @click="closeDialog">Cancel</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, watch } from 'vue'
export default defineComponent({
  props: {
    customer: {
      type: Object as () => {name: string, username: string, email: string, password?: string; password_confirmation?: string; id?: number},
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
    },{deep: true})
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

<style scoped>
.edit-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-dialog-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  max-width: 400px;
  margin: auto;
}

/* Input fields styling */
form input[type="text"],
form input[type="email"],
form input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Labels styling */
form label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

/* Buttons styling */
form button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}

form button[type="button"] {
  background-color: #f44336;
  color: white;
}

</style>
