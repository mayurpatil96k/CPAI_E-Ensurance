<template>
    <div class="policy-detail">
      <img src="https://life.futuregenerali.in/media/lzxjzwb3/life-insurance-for-you-and-your-family.webp" class="policy-img" alt="LIC Jeevan Anand" />
      <div class="policy-info">
        <h1>LIC Jeevan Anand</h1>
        <p>LIC Jeevan Anand offers a combination of protection and savings. This plan provides financial protection against death throughout the lifetime of the policyholder with the provision of lump sum payment at the end of the selected policy term in case of survival.</p>
        <p>Additional details about the policy can go here.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PolicyDetail'
  };
  </script>
  
  <style scoped>
  .policy-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .policy-img {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
  }
  .policy-info {
    max-width: 800px;
    text-align: center;
  }
  </style>
  