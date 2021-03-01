<template>
  <div id="home">
    <div class="add-post">
      <input type="text" placeholder="add a post" v-model="post_content">
      <img src="@/assets/add_post_btn.png" alt="" class="post-btn" @click="addPost">
    </div>
    <PostItem v-for="post in posts" :key="post._id" :postInfos="post" @like-action="getPosts" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import axios from 'axios'
const DateModule = require('@/modules/date.js')

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
      post_content: '',
      posts: []
    }
  },
  methods: {
    getPosts() {
      axios.get('http://localhost:8081/post/')
          .then(posts => {
            this.posts = posts.data.posts
          })
          .catch(error => {
            console.log(error.response.data.message);
          })
    },
    addPost() {
      axios.post('http://localhost:8081/post/add', {
        user: this.$store.state.user.username,
        content: this.post_content
      }).then(() => {
        console.log('post created');
      }).catch(error => {
            console.log(error.response.data.message);
          })
      this.post_content = ''
      this.getPosts();
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: auto;
  margin-top: 20px;
}

.add-post {
  display: flex;
  width: 800px;
  height: 75px;
  align-content: center;

  input {
    border: 1px solid grey;
  }
  img {
    cursor: pointer;
  }
}

h2 {
  color: #45AAF2;
  font-family: 'Lobster', cursive;
  font-size: 1.7em;
}

</style>