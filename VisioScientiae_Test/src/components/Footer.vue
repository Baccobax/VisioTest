<template>
    <footer class="text-light bg-primary footerVisio">
        <div class="p-2">
            VisioTest &copy; 2023
        </div>
        <router-link class="text-light text-decoration-none me-2" :to="{name: 'About'}">About</router-link>
    </footer>
</template>

<style scoped>
    .footerVisio{
        justify-content: space-between;
        text-align: center;
        align-items: center;
        display: flex;
    }
</style>