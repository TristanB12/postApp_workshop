<template>
    <div class="header-container">
        <div id="headerBar">
            <h1>PostApp</h1>
            <ul class="navbar-unlogged"  v-if="!loginInfos.is_logged">
                <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                <li>Signup</li>
                <li><router-link :to="{name: 'Login'}">Login</router-link></li>
            </ul>
            <ul class="navbar-logged"  v-else>
                <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                <li>Account</li>
                <li class="not-a-link">Hello {{ loginInfos.username }} ! </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerBar',
        props: {
            loginInfos: {
                type: Object,
                default: {}
            },
        },
        data() {
            return {
                login_infos: this.loginInfos
            }
        },
        watch: {
            loginInfos() {
                this.login_infos = this.loginInfos
            }
        },
    }
</script>

<style lang="scss" scoped>
.header-container {
    background-color: #45AAF2;
}
h1 {
    font-family: 'Lobster', cursive;
    font-size: 2.1em;
}
a:hover {
    text-decoration: underline;
}
#headerBar {
    width: 70%;
    height: 8vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;

    ul {
        width: 30%;
        display: flex;
        justify-content: space-between;
        list-style: none;

        li {
            font-size: 1.5em;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
        }
    }
}
</style>