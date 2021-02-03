<template>
  <div id="app">
    <HeaderBar :loginInfos="login_infos"/>
    <router-view @userLogged="logUser"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import LoginPage from '@/views/LoginPage.vue';
    export default {
        components: {
          HeaderBar,
        },
        data() {
          return {
            login_infos: {
              is_logged: false,
              username: '',
            }
          }
        },
        methods: {
          logUser(payload) {
            this.login_infos.is_logged = true;
            this.login_infos.username = payload.username;
          }
        },
    }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.router-link-exact-active {
  text-decoration: underline;
}
a {
  color: white;
  text-decoration: none;
}
</style>
