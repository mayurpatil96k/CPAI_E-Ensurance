<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue';
import CustomerPolicies from '@/components/Policies/CustomerPolicies.vue';
import { RouterView } from 'vue-router';

</script>
<template>
  
  <Header />

  <RouterView/>
  
  <Footer class="footer"/>
</template>

<style scoped>

.customer-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.container1{
  position:relative;
  width:100%;
  /* margin-top:10px; */
}
.cont1{
  width:100%;
  position:relative;
}
.demo {
  font-family: 'Noto Sans', sans-serif;
}
.panel {
  /* margin-top: 10px; */
  background: linear-gradient(to right, #13344b, #3a85d1);
  padding: 0;
  /* border-radius: 10px; */
  border: none;
  /* margin-top:10px; */
  width:100%;
  position:relative;
}
.panel .panel-heading {
  padding: 20px 15px;
  border-radius: 10px 10px 0 0;
  margin: 0;
}
.panel .panel-heading .title {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 40px;
  margin: 0;
}
.panel .panel-heading .btn {
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  font-size: 16px;
  text-transform: capitalize;
  border: 2px solid #fff;
  border-radius: 50px;
  transition: all 0.3s ease 0s;
  height:43px;
  margin-left:5px;
}
.panel .panel-heading .btn:hover {
  color: #fff;
  text-shadow: 3px 3px rgba(255, 255, 255, 0.2);
}
.panel .panel-heading .form-control {
  color: #fff;
  background-color: transparent;
  width: 35%;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 20px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
.panel .panel-heading .form-control:focus {
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  outline: none;
}
.panel .panel-heading .form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  font-weight: 500;
}
.panel .panel-body {
  padding: 0;
}
.panel .panel-body .table thead tr th {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px;
  border: none;
}
.panel .panel-body .table tbody tr td {
  color: #fff;
  font-size: 15px;
  padding: 10px 12px;
  vertical-align: middle;
  border: none;
}
.panel .panel-body .table tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
.panel .panel-body .table tbody .action-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.panel .panel-body .table tbody .action-list li {
  display: inline-block;
  margin: 0 5px;
}
.panel .panel-body .table tbody .action-list li a {
  color: #fff;
  font-size: 15px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.panel .panel-body .table tbody .action-list li a:hover {
  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);
}
.panel .panel-body .table tbody .action-list li a:before,
.panel .panel-body .table tbody .action-list li a:after {
  content: attr(data-tip);
  color: #fff;
  background-color: #111;
  font-size: 12px;
  padding: 5px 7px;
  border-radius: 4px;
  text-transform: capitalize;
  display: none;
  transform: translateX(-50%);
  position: absolute;
  top: -32px;
  transition: all 0.3s ease 0s;
}
.panel .panel-body .table tbody .action-list li a:after {
  content: '';
  height: 15px;
  width: 15px;
  padding: 0;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -18px;
  z-index: -1;
}
.panel .panel-body .table tbody .action-list li a:hover:before,
.panel .panel-body .table tbody .action-list li a:hover:after {
  display: block;
}
.panel .panel-footer {
  color: #fff;
  background-color: transparent;
  padding: 15px;
  border: none;
}
.panel .panel-footer .col {
  line-height: 35px;
}
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  display: inline-block;
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border: 1px solid transparent;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.pagination li a:hover {
  background-color: #0056b3;
  color: #fff;
}

.pagination li.active a {
  background-color: #13344b;
  border-color:#13344b;
}

.pagination li a:first-child {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.pagination li a:last-child {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

@media (max-width: 576px) {
  .panel .panel-heading .title {
    font-size: 20px;
    text-align: center;
  }
  .panel .panel-heading .form-control {
    
    width: 100%;
    margin-bottom: 10px;
  }
  .panel .panel-heading .btn_group {
    text-align: center;
    display:flex;
  }
  .panel .panel-footer .col {
    text-align: center;
    /* margin-bottom: 10px; */
  }
  .panel .pagination {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .panel .pagination li a {
    width: 25px;
    height: 25px;
    line-height: 23px;
    font-size: 14px;
  }
  .panel .panel-body .table {
    font-size: 12px;
  }
  .panel .panel-body .table thead {
    display: none;
  }
  .panel .panel-body .table tbody tr {
    display: block;
    /* margin-bottom: 10px; */

 }
  .panel .panel-body .table tbody tr td {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .panel .panel-body .table tbody tr td:before {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
  }
  .panel .panel-body .table tbody tr td:last-child {
    display: flex;
    justify-content: center;
  }
}
</style>