<template>
    <div>
      <Form @search-value="searchValue"/>
      <p v-if="$fetchState.pending"><span class="loading"></span></p>
      <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
      <List v-else v-bind:list="list" />
    </div>
</template>


<script>
import { fetchParams } from './utils/fetch.config.js';

const defaultValues = {
  search: 'react',
  page: 0,
  hitsPerPage: 20
};

export default {
  data() {
    return {
      list: [],
      ...defaultValues
    }
  },
  methods: {
    searchValue(value) {
      this.search = value;
      this.$fetch();
    }
  },
  activated() {
    this.$fetch();
  },
  async fetch() {
    const response = await fetchParams({
      search: this.search,
      page: this.page,
      hitsPerPage: this.hitsPerPage
    });

    this.list = response.hits;
  }
}
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