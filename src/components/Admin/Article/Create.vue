<template>
  <div class="container">
    <h1 class="title">New Article</h1>
    <div class="field">
      <input class="input" type="text" placeholder="Write title of history">
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea is-medium" placeholder="Write your history" rows="10"></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary">Publish</a>
      </p>
      <p class="control">
        <router-link to="/" class="button is-light">Cancel</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Create"
};
</script>

<style scoped>
.container {
    padding: 50px
}
</style>
