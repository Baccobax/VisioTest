<template>
    <button v-show="homePage"> {{ titleButton }} </button>
</template>

<script lang="ts">
    import Button from './Button.vue';

    export default
    {
        name : 'Button',
        props:
        {
            titleButton:
            {
                type: String,
                default: "Button"
            }
        },
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