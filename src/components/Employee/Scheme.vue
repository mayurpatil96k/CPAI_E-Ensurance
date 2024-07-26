<script lang="ts">
import Header from '../Header.vue'
import Footer from '../Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      schemes: [
        {
          schemeId: '1',
          schemeName: 'Scheme 1',
          planName: 'Plan A',
          price: '$100',
          createdAt: '2024-01-01',
          coverTenure: '1 year',
          description: 'Description for Scheme 1',
          amount: '$1000'
        },
        {
          schemeId: '2',
          schemeName: 'Scheme 2',
          planName: 'Plan B',
          price: '$200',
          createdAt: '2024-01-02',
          coverTenure: '2 years',
          description: 'Description for Scheme 2',
          amount: '$2000'
        },
        // Add more scheme objects as needed
      ],
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 10,
      newScheme: {
        schemeId: '',
        schemeName: '',
        planName: '',
        price: '',
        createdAt: '',
        coverTenure: '',
        description: '',
        amount: ''
      },
      editedScheme: {
        schemeId: '',
        schemeName: '',
        planName: '',
        price: '',
        createdAt: '',
        coverTenure: '',
        description: '',
        amount: ''
      }
    }
  },
  computed: {
    filteredSchemes() {
      if (!this.searchQuery) {
        return this.schemes
      }
      const lowercasedQuery = this.searchQuery.toLowerCase()
      return this.schemes.filter(
        (scheme) =>
          scheme.schemeName.toLowerCase().includes(lowercasedQuery) ||
          scheme.planName.toLowerCase().includes(lowercasedQuery)
      )
    },
    paginatedSchemes() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredSchemes.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredSchemes.length / this.itemsPerPage)
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    },
    changePage(pageNumber: number) {
      this.currentPage = pageNumber
    },
    addScheme() {
      // this.schemes.push({ ...this.newScheme, createdAt: new Date().toISOString().split('T')[0] })
      console.log(this.newScheme)
      this.resetForm()
    },
    resetForm() {
      this.newScheme = {
        schemeId: '',
        schemeName: '',
        planName: '',
        price: '',
        createdAt: '',
        coverTenure: '',
        description: '',
        amount: ''
      }
    },
    editScheme(scheme: { schemeId: string; schemeName: string; planName: string; price: string; createdAt: string; coverTenure: string; description: string; amount: string; }) {
      this.editedScheme = { ...scheme }
    },
    updateScheme() {
      const index = this.schemes.findIndex(scheme => scheme.schemeId === this.editedScheme.schemeId)
      if (index !== -1) {
        // this.schemes.splice(index, 1, { ...this.editedScheme })
        console.log(this.editedScheme);
        
      }
      this.editedScheme = {
        schemeId: '',
        schemeName: '',
        planName: '',
        price: '',
        createdAt: '',
        coverTenure: '',
        description: '',
        amount: ''
      }
    },
    deleteScheme(schemeId: string) {
      this.schemes = this.schemes.filter(scheme => scheme.schemeId !== schemeId)
    }
  }
}
</script>

<template>
  <div class="container1">
    <div class="justify-content-center cont1">
      <div class="col-md-offset-1 col-lr-12">
        <div class="panel">
          <div class="panel-heading">
            <div class="row">
              <div class="col col-sm-3 col-xs-12">
                <h4 class="title">Schemes<span></span></h4>
              </div>
              <div class="col-sm-9 col-xs-12 text-right">
                <div class="btn_group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    v-model="searchQuery"
                  />
                  <button class="btn btn-default" data-bs-toggle="modal" data-bs-target="#addSchemeModal" title="Add New Scheme">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Scheme ID</th>
                  <th>Scheme Name</th>
                  <th>Plan Name</th>
                  <th>Price</th>
                  <th>Created At</th>
                  <th>Cover Tenure</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(scheme, index) in paginatedSchemes" :key="index">
                  <td>{{ scheme.schemeId }}</td>
                  <td>{{ scheme.schemeName }}</td>
                  <td>{{ scheme.planName }}</td>
                  <td>{{ scheme.price }}</td>
                  <td>{{ scheme.createdAt }}</td>
                  <td>{{ scheme.coverTenure }}</td>
                  <td class="text-truncate-custom">{{ scheme.description }}</td>
                  <td>{{ scheme.amount }}</td>
                  <td>
                    <ul class="action-list">
                      <li>
                        <a href="#" data-tip="edit" data-bs-toggle="modal" data-bs-target="#editSchemeModal" @click="editScheme(scheme)"><i class="fa fa-edit"></i></a>
                      </li>
                      <li>
                        <a href="#" data-tip="delete" @click="deleteScheme(scheme.schemeId)"><i class="fa fa-trash"></i></a>
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
                showing <b>{{ paginatedSchemes.length }}</b> out of
                <b>{{ filteredSchemes.length }}</b> entries
              </div>
              <div class="col-sm-6 col-xs-6">
                <ul class="pagination hidden-xs pull-right">
                  <li v-if="currentPage > 1" @click="changePage(currentPage - 1)">
                    <a href="#"> < </a>
                  </li>
                  <li
                    v-for="page in totalPages"
                    :class="{ active: page === currentPage }"
                    @click="changePage(page)"
                  >
                    <a href="#">{{ page }}</a>
                  </li>
                  <li v-if="currentPage < totalPages" @click="changePage(currentPage + 1)">
                    <a href="#"> > </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Scheme Modal -->
  <div class="modal fade" id="addSchemeModal" tabindex="-1" aria-labelledby="addSchemeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addSchemeModalLabel">Add New Scheme</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addScheme">
            <div class="mb-3">
              <label for="schemeName" class="form-label">Scheme Name</label>
              <input type="text" class="form-control" id="schemeName" v-model="newScheme.schemeName" required>
            </div>
            <div class="mb-3">
              <label for="planName" class="form-label">Plan Name</label>
              <input type="text" class="form-control" id="planName" v-model="newScheme.planName" required>
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input type="text" class="form-control" id="price" v-model="newScheme.price" required>
            </div>
            <div class="mb-3">
              <label for="coverTenure" class="form-label">Cover Tenure</label>
              <input type="text" class="form-control" id="coverTenure" v-model="newScheme.coverTenure" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <input type="text" class="form-control" id="description" v-model="newScheme.description" required>
            </div>
            <div class="mb-3">
              <label for="amount" class="form-label">Amount</label>
              <input type="text" class="form-control" id="amount" v-model="newScheme.amount" required>
            </div>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Add Scheme</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Scheme Modal -->
  <div class="modal fade" id="editSchemeModal" tabindex="-1" aria-labelledby="editSchemeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editSchemeModalLabel">Edit Scheme</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateScheme">
            <div class="mb-3">
              <label for="editSchemeName" class="form-label">Scheme Name</label>
              <input type="text" class="form-control" id="editSchemeName" v-model="editedScheme.schemeName" required>
            </div>
            <div class="mb-3">
              <label for="editPlanName" class="form-label">Plan Name</label>
              <input type="text" class="form-control" id="editPlanName" v-model="editedScheme.planName" required>
            </div>
            <div class="mb-3">
              <label for="editPrice" class="form-label">Price</label>
              <input type="text" class="form-control" id="editPrice" v-model="editedScheme.price" required>
            </div>
            <div class="mb-3">
              <label for="editCoverTenure" class="form-label">Cover Tenure</label>
              <input type="text" class="form-control" id="editCoverTenure" v-model="editedScheme.coverTenure" required>
            </div>
            <div class="mb-3">
              <label for="editDescription" class="form-label">Description</label>
              <input type="text" class="form-control" id="editDescription" v-model="editedScheme.description" required>
            </div>
            <div class="mb-3">
              <label for="editAmount" class="form-label">Amount</label>
              <input type="text" class="form-control" id="editAmount" v-model="editedScheme.amount" required>
            </div>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Update Scheme</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.text-truncate-custom {
  max-width: 200px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.customer-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.container1 {
  position: relative;
  width: 100%;
  /* margin-top:10px; */
}
.cont1 {
  width: 100%;
  position: relative;
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
  width: 100%;
  position: relative;
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.pagination li a:hover {
  background-color: #0056b3;
  color: #fff;
}

.pagination li.active a {
  background-color: #13344b;
  border-color: #13344b;
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
    display: flex;
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
