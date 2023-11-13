<template>
    <h3 class="ms-3">Version 0.1.0</h3>
    <p class="ms-4">VisioTest is a web application that allows users to create and manage articles.</p>
    <HomeButton />
</template>

<script lang="ts">
import HomeButton from '@/components/HomeButton.vue';

export default {
    name: 'About',
    components: {
        HomeButton,
    },
}
</script>