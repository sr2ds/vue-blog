<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Welcome to Vue-Blog 😛</h1>
        <h2>
          This is just a joke to increase my knowledge,
          check out the
          <a href="https://github.com/sr2ds/vue-blog">sr2ds/vue-blog repo</a>.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroHeader"
};
</script>

<style>
.hero-body {
  background-image: url(https://picsum.photos/1200/400/?random);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
}
</style>
