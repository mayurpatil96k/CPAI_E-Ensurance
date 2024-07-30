<template>
  
    <div class="card border-primary border-2 hover-shadow" style="width: 18rem">
      <img
        src="https://life.futuregenerali.in/media/lzxjzwb3/life-insurance-for-you-and-your-family.webp"
        class="card-img-top"
        alt="LIC Plan Image"
        
      />
      <div class="card-body">
        <h5 class="card-title">LIC Jeevan Anand</h5>
        <p class="card-text text-justify text-truncate-5">
          LIC Jeevan Anand offers a combination of protection and savings. This plan provides
          financial protection against death throughout the lifetime of the policyholder with the
          provision of lump sum payment at the end of the selected policy term in case of survival.
        </p>
        <div class="d-flex justify-content-md-between">
          <a href="#" class="btn btn-outline-primary">Buy Now</a>
          <router-link to="/agent/policydetails" class="btn btn-outline-primary">Know More</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .text-justify {
      text-align: justify;
    }
    .text-truncate-5 {
      display: -webkit-box;
      -webkit-line-clamp: 5; 
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hover-shadow:hover {
      box-shadow: 0 4px 8px 0 rgb(8, 85, 127), 0 6px 20px 0 rgb(8, 85, 127);
    }
  </style>
  