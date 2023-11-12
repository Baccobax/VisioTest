<template>
    <RouterLink v-show="homePage" class="btn btn-outline-light"  :to="{name: 'NewArticle'}" >
        New Article
    </RouterLink>
</template>

<script lang="ts">

    export default
    {
        name : 'Button',
        computed:
        {
            homePage()
            {
                if(this.$route.path === '/')
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
</script>