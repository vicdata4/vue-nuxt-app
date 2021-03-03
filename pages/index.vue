<template>
  <div class="container">
    <div>
      <Header />
      <Form />
      <p v-if="$fetchState.pending">
        <span class="loading"></span>
      </p>
      <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
      <List v-else v-bind:mountains="mountains" />
    </div>
    <button @click="$fetch">Refresh Data</button>
  </div>
</template>

<script>
import { errorHandler } from '../components/utils/fetch.config.js';

export default {
  data() {
    return {
      mountains: [],
      search: 'react',
      page: 0,
      hitsPerPage: 20
    }
  },
  activated() {
      this.$fetch();
  },
  async fetch() {
    const mountains = await fetch(`https://hn.algolia.com/api/v1/search?query=${this.search}&page=${this.page}&hitsPerPage=${this.hitsPerPage}`, { method: 'GET' })
    .then(errorHandler)
    .then((response) => {
      return response;
    }).catch((error) => {
      return { error };
    });

    this.mountains = mountains.hits;
  }
}
</script>
</script>

<style>
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
