<template>
    <footer>
        <p>VisioTest &copy; 2023</p>
        <router-link :to="{name: 'About'}">About</router-link>
    </footer>
</template>

<style scoped>
    footer{
        background-color: grey;
        justify-content: space-between;
        text-align: center;
        display: flex;
        margin-bottom: 20px;
    }
</style>