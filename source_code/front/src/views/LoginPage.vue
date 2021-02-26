<template>
    <div id="loginPage">
        <div class="user-login-pannel">
            <h2>User login</h2>
            <input type="text" placeholder="Username" v-model="username_input">
            <input type="password" placeholder="Password" v-model="password_input">
            <div v-html="error" class="error"></div>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'LoginPage',
        data() {
            return {
                username_input: '',
                password_input: '',
                error: null
            }
        },
        methods: {
            login() {
                axios.post('http://localhost:8081/auth/login', {
                    username: this.username_input,
                    password: this.password_input
                }).then(user => {
                    this.$store.dispatch('setUser', user.data.user);
                    this.$router.push({ name: 'Home' });
                }).catch(error => {
                    this.error = error.response.data.message
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
#loginPage {
    height: 90vh;
    display: flex;
}
.user-login-pannel {
    width: 25%;
    height: 60%;
    margin: auto;
    align-self: center;
    background-color: #74C5FF;
    border: 5px solid #45AAF2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        color: white;
        font-size: 2em;
        text-align: center;
        font-family: 'Lobster', cursive;
    }
}

button {
    width: 40%;
    margin: 0 auto 0 auto;
    font-size: 1.5em;
    padding: 10px 10px;
    border-radius: 15px;
    border: 3px solid #20BF6B;
    outline: none;
    color: white;
    background-color: #20BF6B;
    cursor: pointer;

    &:hover {
    color: #20BF6B;
    background-color: white;
    }
}

.error {
    color: red;
    text-align: center;
}
</style>