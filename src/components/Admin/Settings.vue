<template>
  <div class="container">
    <h1 class="title">Blog Basic Settings</h1>
    <nav class="panel">
      <p class="panel-heading">{{ indexName }}</p>
      <div class="panel-block">
        <div class="field">
          <div class="control">
            <p
              class="textarea"
              placeholder="Write your history"
              disabled
              rows="10"
            >{{ indexFileContent }}</p>
          </div>
        </div>
      </div>
    </nav>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <router-link to="/" class="button is-light">Hide</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      indexName: window.indexFileDescript,
      indexFileContent: {}
    };
  },
  async created() {
    this.indexFileContent = await this.$article.getArticlesList();
  }
};
</script>

<style scoped>
.container {
  padding: 50px;
}
textarea {
  width: 100%;
}
</style>
