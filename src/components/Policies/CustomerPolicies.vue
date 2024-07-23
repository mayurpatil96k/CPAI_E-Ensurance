<script>
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
          image: 'public/AnantAmbani.avif'
        },
        {
          name: 'Elon Musk',
          email: 'elon@example.com',
          phone: '987-654-3210',
          image: 'public/ElonMusk.jpeg'
        },
        // Add more customers here if needed
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
  }
}
</script>

<template>
  <div class="dashboard">
    <Header />
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row d-flex align-content-center">
                <div class="col-12 col-sm-4">
                  <h4 class="title">Customer Details</h4>
                </div>
                <div class="col-12 col-sm-4 text-right">
                  <div class="btn_group d-flex justify-content-end">
                    <input type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
                    <button class="btn btn-default" title="Reload">
                      <i class="mdi mdi-sync-circle" style='font-size:18px'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(customer, index) in filteredCustomers" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <img :src="customer.image" alt="Customer Image" class="img-thumbnail customer-icon" />
                    </td>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>
                      <ul class="action-list">
                        <li>
                          <a href="#" data-tip="Edit"><i class="fa fa-edit"></i></a>
                        </li>
                        <li>
                          <a href="#" data-tip="Delete"><i class="fa fa-trash"></i></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="panel-footer">
              <div class="row">
                <div class="col-6">
                  Showing <b>{{ filteredCustomers.length }}</b> out of <b>{{ totalcustomers }}</b> entries
                </div>
                <div class="col-6">
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
    <Footer />
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100vw;
  padding: 0;
}
.customer-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.demo {
  font-family: 'Noto Sans', sans-serif;
}
.panel {
  margin-top: 10px;
  background: linear-gradient(to right, #96d0c3, #c9bdd9);
  padding: 0;
  border-radius: 10px;
  border: none;
  width: 100%;
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
  height: 43px;
  margin-left: 5px;
}
.panel .panel-heading .btn:hover {
  color: #fff;
  text-shadow: 3px 3px rgba(255, 255, 255, 0.2);
}
.panel .panel-heading .form-control {
  color: #fff;
  background-color: transparent;
  width: 100%;
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
  word-break: break-word; /* Ensure long text wraps properly */
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
  left: 50%;
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
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 0 0 10px 10px;
  border: none;
}
.panel .panel-footer .col {
  line-height: 35px;
}
.panel .panel-footer .pagination {
  margin: 0;
}
.panel .panel-footer .pagination li a {
  color: #fff;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: all 0.3s ease 0s;
}
.panel .panel-footer .pagination li:hover a,
.panel .panel-footer .pagination li.active a {
  color: #fff;
  background-color: transparent;
  border-color: #fff;
}
</style>
