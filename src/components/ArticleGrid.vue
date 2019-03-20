<template>
  <section class="articles">
    <ArticleCard/>

    <PromotionalCard/>

    <ArticleCard/>
  </section>
</template>

<script>

const ArticleCard = () => import("@/components/ArticleCard");
const PromotionalCard = () => import("@/components/PromotionalCard");

export default {
  name: "ArticleGrid",
  components: {
    ArticleCard,
    PromotionalCard
  }
};
</script>

<style>
.articles {
  margin: 5rem 0;
  margin-top: -200px;
}
.articles .content p {
  line-height: 1.9;
  margin: 15px 0;
}
</style>

