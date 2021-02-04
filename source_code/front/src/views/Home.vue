<template>
  <div id="home">
    <h2>My Posts</h2>
    <img src="@/assets/add_post_btn.png" alt="" class="post-btn">
    <PostItem v-for="post in my_posts" :key="post.nb_likes" :postInfos="post" :username="username"/>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  name: 'Home',
  components: {
    PostItem,
  },
  props: {
    username: {
      type: String,
      default:''
    },
  },
  data() {
    return {
      my_posts: [
        {
          date: '10/02/2021',
          nb_likes: 12,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. trop bien ce workshop Ut laoreet fringilla lorem, sit amet semper neque interdum quis'
        },
        {
          date: '25/12/2020',
          nb_likes: 4,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Joyeux noël les potes . Ut laoreet fringilla lorem, sit amet semper neque interdum quis'
        },
        {
          date: '28/03/2020',
          nb_likes: 62,
          content: 'eros nisl, eu ultrices massa nulla ac augue Donec id efficitur nulla, eu efficitur tellus. In ut sagittis urna, non tempus felis. Fusce convallis, ligula a mattis suscipit'
        },
        {
          date: '19/07/2019',
          nb_likes: 44,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. trop bien ce workshop Ut laoreet fringilla lorem, sit amet semper neque interdum quis'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  color: #45AAF2;
  font-family: 'Lobster', cursive;
  font-size: 1.7em;

}
</style>