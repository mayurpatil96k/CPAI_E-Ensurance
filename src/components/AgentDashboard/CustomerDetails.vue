<template>
    <div class="customer-details">
      <h2>{{ customer.name }}</h2>
      <p><strong>Email:</strong> {{ customer.email }}</p>
      <p><strong>Phone:</strong> {{ customer.phone }}</p>
      <p><strong>Date of Birth:</strong> {{ customer.dob }}</p>
      <img src="/public/AnantAmbani.avif" alt="Customer Image" class="img-thumbnail customer-icon" />
      
      <h3>Policies taken by {{customer.name}}</h3>
      <div class="policy-cards">
        <div class="policy-card" v-for="policy in policies" :key="policy.id">
          <h4>{{ policy.title }}</h4>
          <p>{{ policy.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    props: {
      customerName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        customers: [
          { name: 'Anant Ambani', email: 'anant@example.com', phone: '123-456-7890', dob: '1995-04-10', agentId: 'A001', image: 'public/AnantAmbani.avif' },
          // Other customer objects...
          { name: 'Elon Musk', email: 'elon@example.com', phone: '987-654-3210', dob: '1995-04-10', agentId: 'A006', image: 'public/ElonMusk.jpeg' }
        ]
      };
    },
    computed: {
      customer() {
        return this.customers.find(customer => customer.name === this.customerName) || {};
      },
      policies() {
        return [
          { id: 1, title: 'Health Insurance', description: 'Comprehensive health insurance coverage. LIC Jeevan Anand offers a combination of protection and savings. This plan provides' },
          { id: 2, title: 'Life Insurance', description: 'Affordable life insurance plans. LIC Jeevan Anand offers a combination of protection and savings. This plan provides ' },
          { id: 3, title: 'Car Insurance', description: 'Reliable car insurance policies. LIC Jeevan Anand offers a combination of protection and savings. This plan provides' }
        ];
      }
    }
  });
  </script>
  <style scoped>
  .customer-details {
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    color: white;
    background: linear-gradient(to right, #13344b, #3a85d1);
  }
  
  .customer-details h2 {
    margin-top: 0;
    font-size: 1.8em;
    font-weight: bold;
  }
  
  .customer-details p {
    margin: 10px 0;
    font-size: 1.1em;
  }
  
  .customer-details img.customer-icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px 0;
    object-fit: cover;
    border: 4px solid #ddd;
  }
  
  .policy-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .policy-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 220px;
    text-align: left;
    transition: transform 0.3s ease;
  }
  
  .policy-card:hover {
    transform: translateY(-5px);
  }
  
  .policy-card h4 {
    margin: 0 0 10px;
    color: #333;
    font-size: 1.2em;
  }
  
  .policy-card p {
    margin: 0;
    color: #777;
    font-size: 1em;
  }
  
  @media (max-width: 768px) {
    .customer-details {
      padding: 10px;
    }
  
    .policy-card {
      width: 100%;
    }
  }
  </style>