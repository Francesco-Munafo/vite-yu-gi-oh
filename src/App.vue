<script>


export default {
  data() {
    return {

    }
  },
  components: {

  },
}
</script>

<template>

  <header class="d-flex justify-content-between p-3">
    <div class="d-flex">
      <img class="img-fluid" width="120" src="./assets/img/Yu-Gi-Oh!_(Logo).jpg" alt="">
      <h1>Yu-Gi-Oh API</h1>
    </div>
    <div class="filter">
      <select class="form-select" aria-label="Default select example">
        <option selected>Categories</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </header>
  <main class="p-5">
    <div class="container bg-white">

    </div>
  </main>
</template>

<style lang="scss">
@use './assets/scss/app.scss'
</style>
