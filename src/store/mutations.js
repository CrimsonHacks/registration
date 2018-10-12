export default {
  userLoggedIn(state) {
    state.isLoggedIn = true;
  },
  userLoggedOut(state) {
    state.isLoggedIn = false;
  },
  toggleUserLogIn(state) {
    state.isLoggedIn = !state.isLoggedIn;
  },
};
