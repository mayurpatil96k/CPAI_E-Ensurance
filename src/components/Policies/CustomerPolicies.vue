<template>
    <div class="container my-5">
      <h1 class="text-center mb-4 header">All Customers Policies Record</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td><img :src="customer.image" alt="Customer Image" class="img-thumbnail customer-icon"></td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
                <button class="btn btn-outline-dark">
                  <i class="mdi mdi-arrow-right-bold-box-outline"></i></button>
                <button class="btn btn-outline-danger ">
                  <i class="mdi mdi-account-off-outline"></i>
                </button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customers: [
          { id: 1, name: 'Anant Ambani', email: 'anant@example.com', phone: '123-456-7890', image: 'public/AnantAmbani.avif' },
          { id: 2, name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', image: 'public/ElonMusk.jpeg' },
          { id: 3, name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', image: 'public/ElonMusk.jpeg' },
          { id: 2, name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', image: 'public/ElonMusk.jpeg' },
          { id: 2, name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', image: 'public/ElonMusk.jpeg' },
          { id: 2, name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', image: 'public/ElonMusk.jpeg' },
        ]
      };
    }
  };
  </script>
  
<style scoped>
.customer-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.header {
  color: #fff;
  background-color: #6c757d;
  padding: 10px;
  border-radius: 5px;
}

.table {
  border: 1px solid #dee2e6;
  text-align: center;
}

.table thead th {
  background-color: #343a40;
  color: #fff;
}

.table tbody tr:hover {
  background-color: #f8f9fa;
  
}


.btn {
  border-radius: 50%;
}

.container {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width:100vw;
}

  </style>
  