<template>
  <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br>sed eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h1>
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
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Plum_trees_Kitano_Tenmangu.jpg/1200px-Plum_trees_Kitano_Tenmangu.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
}
</style>
