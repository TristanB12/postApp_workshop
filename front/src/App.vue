<template>
  <div id="app">
    <HeaderBar />
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
    export default {
        components: {
          HeaderBar,
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
