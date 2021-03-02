<template>
  <header>
      <div class="title-box">
        <Logo />
        <h1 class="title">
            my-nuxt-app
        </h1>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      
  </header>
</template>

<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e3e3e3;
}

.title {
    font-size: 20px;
} 
.title-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
