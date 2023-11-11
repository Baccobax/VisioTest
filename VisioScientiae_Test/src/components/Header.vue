<template>
    <header>
        <h1 id = "titleText"> {{title}} </h1>
        <RouterLink to="NewArticle" >
            <Button title-button="New Article"/>
        </RouterLink>
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
        background-color: grey;
        justify-content: space-between;
        align-items: center;
        display: flex;
        margin-bottom: 20px;
    }
    #titleText{
        padding-left: 2%;
    }
</style>