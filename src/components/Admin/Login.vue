<template>
  <div class="login">
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
            <input class="input" type="password" v-model="token" placeholder="Password Token">
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
      token: null,
      ownerOfGist: window.ownerOfGist || "need set this in main.js"
    };
  },
  methods: {
    submit: function() {
      alert(this.token)
    }
  }
};
</script>
<style scoped>
.login {
  padding: 30px;
}
</style>

