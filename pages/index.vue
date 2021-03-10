<template>
  <div class="container">
    <Header />
    <ul>
      <li><NuxtLink to="finder">Finder page</NuxtLink></li>
      <li><NuxtLink to="layer">Layer</NuxtLink></li>
      <li><NuxtLink to="user/profile">Subroute</NuxtLink></li>
    </ul>
  </div>
</template>

<style>
ul {
  padding: 40px;
}
</style>