<template>
    <div class="header-container">
        <div id="headerBar">
            <h1>PostApp</h1>
            <ul id="navBar">
                <li>Home</li>
                <li><router-link to="Login">Login</router-link></li>
                <li>Signup</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerBar'
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
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>