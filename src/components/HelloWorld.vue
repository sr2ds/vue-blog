<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     This is just a joke to increase my knowledge,<br>
      check out the
      <a href="https://github.com/sr2ds/vue-blog" target="_blank" rel="noopener">sr2ds/vue-blog repo</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
