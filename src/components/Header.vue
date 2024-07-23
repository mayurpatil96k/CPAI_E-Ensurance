<template>
  <nav class="navbar pr-md-5 navbar-expand-lg navbar-light bg-primary" >
    <div class="container-fluid">
      <a class="navbar-brand u-color" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active u-color" aria-current="page" href="#">Employees Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active u-color" aria-current="page" href="#">Customer Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active u-color" aria-current="page" href="#">Agent Details</a>
          </li>
        </ul>
          <button class="btn btn-outline-light" type="submit">Login</button>
      
      </div>
    </div>
  </nav>
</template>

<style scoped>
.u-color {
  color: white !important;
}
.navbar {
  width: 98.8vw;
}
  .u-color{
    color: white !important;
  }
  .navbar{
    width:98.8vw;
    /* padding :1rem 12rem ; */
   
  }
</style>
