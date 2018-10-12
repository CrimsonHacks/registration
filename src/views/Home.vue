<template>
    <div>
        <h1>Welcome to CrimsonHacks registration!</h1>
        <h1 v-if="loggedIn">You're logged in!</h1>
        <button v-on:click="toggleLogIn">Toggle</button>
    </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    loggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    toggleLogIn() {
      this.$store.commit('toggleUserLogIn');
    },
  },
};
</script>
