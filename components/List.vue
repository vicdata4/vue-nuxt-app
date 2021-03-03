<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.title">
        <a v-bind:href="item.url" target="_blank">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
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

