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
  background-image: url(https://picsum.photos/1200/400/?random);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
}
</style>
