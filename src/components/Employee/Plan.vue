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
      plans: [
        {
          planId: '1',
          planName: 'Plan A',
          planDescription: 'Description for Plan A',
          createdAt: '2024-01-01',
        },
        {
          planId: '2',
          planName: 'Plan B',
          planDescription: 'Description for Plan B',
          createdAt: '2024-01-02',
        },
        // Add more plan objects as needed
      ],
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 10,
      newPlan: {
        planId: '',
        planName: '',
        planDescription: '',
        createdAt: ''
      },
      editedPlan: {
        planId: '',
        planName: '',
        planDescription: '',
        createdAt: ''
      }
    }
  },
  computed: {
    filteredPlans() {
      if (!this.searchQuery) {
        return this.plans
      }
      const lowercasedQuery = this.searchQuery.toLowerCase()
      return this.plans.filter(
        (plan) =>
          plan.planName.toLowerCase().includes(lowercasedQuery) ||
          plan.planDescription.toLowerCase().includes(lowercasedQuery)
      )
    },
    paginatedPlans() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredPlans.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredPlans.length / this.itemsPerPage)
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    },
    changePage(pageNumber: number) {
      this.currentPage = pageNumber
    },
    addPlan() {
      // this.plans.push({ ...this.newPlan, createdAt: new Date().toISOString().split('T')[0] })
      console.log(this.newPlan)
      this.resetForm()
    },
    resetForm() {
      this.newPlan = {
        planId: '',
        planName: '',
        planDescription: '',
        createdAt: ''
      }
    },
    editPlan(plan: { planId: string; planName: string; planDescription: string; createdAt: string }) {
      this.editedPlan = { ...plan }
    },
    updatePlan() {
      const index = this.plans.findIndex(plan => plan.planId === this.editedPlan.planId)
      if (index !== -1) {
        // this.plans.splice(index, 1, { ...this.editedPlan })
        console.log(this.editedPlan);
        
      }
      this.editedPlan = {
        planId: '',
        planName: '',
        planDescription: '',
        createdAt: ''
      }
    },
    deletePlan(planId: string) {
      this.plans = this.plans.filter(plan => plan.planId !== planId)
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
                <h4 class="title">Plans<span></span></h4>
              </div>
              <div class="col-sm-9 col-xs-12 text-right">
                <div class="btn_group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    v-model="searchQuery"
                  />
                  <button class="btn btn-default" data-bs-toggle="modal" data-bs-target="#addPlanModal" title="Add New Plan">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Plan ID</th>
                  <th>Plan Name</th>
                  <th>Plan Description</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(plan, index) in paginatedPlans" :key="index">
                  <td>{{ plan.planId }}</td>
                  <td>{{ plan.planName }}</td>
                  <td class="text-truncate-custom">{{ plan.planDescription }}</td>
                  <td>{{ plan.createdAt }}</td>
                  <td>
                    <ul class="action-list">
                      <li>
                        <a href="#" data-tip="edit" data-bs-toggle="modal" data-bs-target="#editPlanModal" @click="editPlan(plan)"><i class="fa fa-edit"></i></a>
                      </li>
                      <li>
                        <a href="#" data-tip="delete" @click="deletePlan(plan.planId)"><i class="fa fa-trash"></i></a>
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
                showing <b>{{ paginatedPlans.length }}</b> out of
                <b>{{ filteredPlans.length }}</b> entries
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

  <!-- Add Plan Modal -->
  <div class="modal fade" id="addPlanModal" tabindex="-1" aria-labelledby="addPlanModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addPlanModalLabel">Add New Plan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addPlan">
            <div class="mb-3">
              <label for="planName" class="form-label">Plan Name</label>
              <input type="text" class="form-control" id="planName" v-model="newPlan.planName" required>
            </div>
            <div class="mb-3">
              <label for="planDescription" class="form-label">Plan Description</label>
              <input type="text" class="form-control" id="planDescription" v-model="newPlan.planDescription" required>
            </div>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Add Plan</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Plan Modal -->
  <div class="modal fade" id="editPlanModal" tabindex="-1" aria-labelledby="editPlanModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editPlanModalLabel">Edit Plan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updatePlan">
            <div class="mb-3">
              <label for="editPlanName" class="form-label">Plan Name</label>
              <input type="text" class="form-control" id="editPlanName" v-model="editedPlan.planName" required>
            </div>
            <div class="mb-3">
              <label for="editPlanDescription" class="form-label">Plan Description</label>
              <input type="text" class="form-control" id="editPlanDescription" v-model="editedPlan.planDescription" required>
            </div>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Update Plan</button>
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
