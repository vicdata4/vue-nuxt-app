<template>
  <div>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <a v-bind:href="mountain.url" target="_blank">
          {{ mountain.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['mountains'],
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
</style>

