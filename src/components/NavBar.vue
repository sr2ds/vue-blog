<template>
  <div class>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" >
            Vue Blog
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">Home</a>
            <a class="navbar-item" href="https://github.com/sr2ds/vue-blog">Source Code on Github </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar.is-white {
  background: #f0f2f4;
}
.navbar-brand .brand-text {
  font-size: 1.11rem;
  font-weight: bold;
}
</style>
