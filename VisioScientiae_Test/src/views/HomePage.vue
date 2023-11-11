<template>
    <div>
        <ArticleList :articleList="articleList" />
    </div>
</template>


<script lang="ts">
    import type { ArticleInterface } from '@/model/Interfaces'
	import ArticleHead from '../components/ArticleHead.vue'
    import ArticleList from '../components/ArticleList.vue'
	import { useArticleStore } from '@/stores/articleStore'

	//const articleStore = useArticleStore()

    export default {
		name: 'HomePage',
        components: {
            ArticleHead,
            ArticleList,
        },
        props: {
            showCOSE: Boolean,
        },
        data(){
            return{
                articleList: Array<ArticleInterface>(),
				articleStore: useArticleStore(),
            }
        },
        async mounted(){
            this.articleList = this.articleStore.getArticles
        },	
    }
</script>