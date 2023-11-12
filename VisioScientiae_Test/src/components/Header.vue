<template>
    <header class="bg-primary p-2">
        <h1 id="titleText" class="text-light ms-2"> {{title}} </h1>
        <Button class="me-2" />
    </header>
</template>

<script lang = 'ts'>
    import Button from './Button.vue';
    export default
    {
        name: 'HeaderTest',
        props: 
        {
            title: 
            {
                type: String,
                default: "VisioTest Blog"
            }
        },
        components:
        {
            Button
        },
    }
</script>

<style scoped>
    header{
        justify-content: space-between;
        align-items: center;
        display: flex;
        margin-bottom: 20px;
    }
    #titleText{
        font-family: 'Times New Roman', Times, serif;
    }
</style>