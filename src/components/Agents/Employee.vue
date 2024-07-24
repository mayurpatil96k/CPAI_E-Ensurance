<script lang='ts'>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      customers: [
        {
          name: 'Anant Ambani',
          email: 'anant@example.com',
          phone: '123-456-7890',
          username: '1995-04-10',
        },
        {
          name: 'Elon Musk',
          email: 'elon@example.com',
          phone: '987-654-3210',
          username: '1995-04-10',
        },
        {
          name: 'Anant Ambani',
          email: 'anant@example.com',
          phone: '123-456-7890',
          username: '1995-04-10',
        },
        {
          name: 'Elon Musk',
          email: 'elon@example.com',
          phone: '987-654-3210',
          username: '1995-04-10',
        },{
          name: 'Anant Ambani',
          email: 'anant@example.com',
          phone: '123-456-7890',
          username: '1995-04-10',
        },
        {
          name: 'Elon Musk',
          email: 'elon@example.com',
          phone: '987-654-3210',
          username: '1995-04-10',
        },{
          name: 'Anant Ambani',
          email: 'anant@example.com',
          phone: '123-456-7890',
          username: '1995-04-10',
        },
        {
          name: 'Elon Musk',
          email: 'elon@example.com',
          phone: '987-654-3210',
          username: '1995-04-10',
        },
      ],
      totalcustomers: 25,
      searchQuery: ''
    }
  },
  computed: {
    filteredCustomers() {
      if (!this.searchQuery) {
        return this.customers;
      }
      const lowercasedQuery = this.searchQuery.toLowerCase();
      return this.customers.filter(customer =>
        customer.name.toLowerCase().includes(lowercasedQuery) ||
        customer.email.toLowerCase().includes(lowercasedQuery) ||
        customer.phone.includes(lowercasedQuery) 
      );
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }  
}
</script>
<template>
  

  <div class="container1">
    <div class="justify-content-center cont1">
      <div class="col-md-offset-1 col-lr-12 ">
        <div class="panel">
          <div class="panel-heading">
            <div class="row">
              <div class="col col-sm-3 col-xs-12">
                <h4 class="title">Employee<span></span></h4>
              </div>
              <div class="col-sm-9 col-xs-12 text-right">
                <div class="btn_group">
                  <input type="text" class="form-control" placeholder="Search" v-model="searchQuery"/>
                  <button class="btn btn-default" title="Reload" @click="reloadPage">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(customer, index) in filteredCustomers" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.username }}</td>
                  <td>
                    <ul class="action-list">
                      <li>
                        <a href="#" data-tip="edit"><i class="fa fa-edit"></i></a>
                      </li>
                      <li>
                        <a href="#" data-tip="delete"><i class="fa fa-trash"></i></a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="col col-sm-6 col-xs-6">
                showing <b>{{ filteredCustomers.length }}</b> out of <b>{{ totalcustomers }}</b> entries
              </div>
              <div class="col-sm-6 col-xs-6">
                <ul class="pagination hidden-xs pull-right">
                  <li><a href="#">< </a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
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
    text-align: center;
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
  text-align: center;
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