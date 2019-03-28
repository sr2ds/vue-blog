<template>
  <div class>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <router-link class="navbar-item" to="/">Vue Blog</router-link>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <router-link
              class="navbar-item"
              v-if="this.$route.path != '/admin/login' && !this.$store.state.isLoggedIn"
              to="/admin/login"
            >Login</router-link>

            <a
              class="navbar-item"
              v-if="!this.$store.state.isLoggedIn"
              href="https://github.com/sr2ds/vue-blog"
            >Source Code on Github</a>

            <router-link
              class="navbar-item"
              to="/admin/article/create"
              v-if="this.$store.state.isLoggedIn"
            >New Article</router-link>
            
            <a class="navbar-item" v-if="this.$store.state.isLoggedIn">Blog Settings</a>

            <a
              class="navbar-item"
              v-if="this.$store.state.isLoggedIn"
              @click="$store.dispatch('logout')"
            >Logout</a>
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
