<template>
    <div id="AccountPage">
        <h2>Account</h2>
        <body>
            <div class="user-posts">
                <h3>My posts</h3>
                <PostItem v-for="post in posts" :key="post.nb_likes" :postInfos="post" :username="username"/>
            </div>
            <div class="user-infos">
                <h3>Informations</h3>
                <span> <span class="title">Username:</span> {{username}} </span>
            </div>
        </body>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
    export default {
        name: 'Account',
        components: {
            PostItem,
        },
        props: {
            username: {
                type: String,
                default: '' 
            },
        },
        data() {
            return {
                posts: [
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
#AccountPage {
    width:  70%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2 {
  font-family: 'Lobster', cursive;
  color: #45AAF2;
  font-size: 2em;
}
h3 {
    font-family: 'Roboto', sans-serif;
    color: black;
    font-size: 1.4em; 
}
body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.user-posts {
    text-align: center;

    div {
        margin-top: 20px;
    }
}
</style>