<template>
  <div id="app">
    <NavBar/>

    <HeroHeader/>

    <div class="container">
      <ArticleGrid/>
    </div>
  </div>
</template>

<script>

const NavBar = () => import("@/components/NavBar");
const ArticleGrid = () => import("@/components/ArticleGrid");
const HeroHeader = () => import("@/components/HeroHeader");

export default {
  name: "app",
  components: {
    NavBar,
    ArticleGrid,
    HeroHeader
  }
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  background: #f0f2f4;
}

.article,
.promo-block {
  margin-top: 6rem;
}
div.column.is-8:first-child {
  padding-top: 0;
  margin-top: 0;
}
.promo-block .container {
  margin: 1rem 5rem;
}
</style>
