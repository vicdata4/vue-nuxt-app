<template>
  <div class="container">
    <div>
      <Header />
      <Form />
      <List />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('mounted index***');
    })
  }
}
</script>

<style>
</style>
