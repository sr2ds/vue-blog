<template>
  <div class="login" v-if="!this.$store.state.isLoggedIn">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Git User Account</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-static" type="email" :value="ownerOfGist" readonly>
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Token Git</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="password"
              v-model="token"
              placeholder="Password Token"
              :class="[ token.length > 1 && token.length  < 10  ? 'is-danger' : ''] "
            >
          </p>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary" @click="submit()">Login</a>
      </p>
      <p class="control">
        <router-link to="/" class="button is-light">Cancel</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      token: "",
      ownerOfGist: window.ownerOfGist || "need set this in main.js"
    };
  },
  methods: {
    submit: function() {
      if (this.token.length) {
        this.$store.dispatch("login", this.token);
        this.$router.push("/");
      }
    }
  }
};
</script>
<style scoped>
.login {
  padding: 30px;
}
</style>

