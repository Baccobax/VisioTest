<template>
    <div v-for="articleHead in articleStore.articles">
        <ArticleHead :articleHead="articleHead" />
    </div>
    <div>
        <h1 v-show = "articleStore.articles.length === 0">No Articles to Show</h1>
    </div>
</template>

<script lang = 'ts'>
    import type { ArticleInterface } from '@/model/Interfaces';
    import ArticleHead from './ArticleHead.vue';
    import { useArticleStore } from '@/stores/articleStore';

    export default
    {
        name: 'ArticleList',
        props: {
            articleList: {
                type: Array<ArticleInterface>,
                required: true}
        },
        components:
        {
            ArticleHead,
        },
        data()
        {
            return{
                articleStore: useArticleStore(),
            }
        },
    }
</script>