<template>
    <div id="loginPage">
        <div class="user-signup-pannel">
            <h2>User Sign up</h2>
            <input type="text" placeholder="Username" v-model="username_input">
            <input type="password" placeholder="Password" v-model="password_input">
            <input type="password" placeholder="Confirm password" v-model="confirm_password_input">
            <div v-html="error" class="error"></div>
            <button @click="signUp">Sign up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'SignupPage',
        data() {
            return {
                username_input: '',
                password_input: '',
                confirm_password_input: '',
                error: null
            }
        },
        methods: {
            signUp() {
                // TODO: add a post request to http://localhost:8081/auth/signup with all inputs in body
                //       if an error occures, set this.error to the data of the response
                //       else log the user with :
                //                  - this.$store.dispatch('setUser', user.data.user);
                //                  - this.$router.push({ name: 'Home' });
            }
        },
    }
</script>

<style lang="scss" scoped>
#loginPage {
    height: 90vh;
    display: flex;
}
.user-signup-pannel {
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