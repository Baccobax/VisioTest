<template>
	<div>
		<h1 class="title">{{ articleData?.title }}</h1>
		<p class="author">{{ articleData?.author }}</p>
		<p class="date">{{ articleData?.date }}</p>
		<p class="content">{{ articleData?.content }}</p>
	</div>
	<div>
		<router-link to="/" class="btn">Back</router-link>
	</div>
</template>

<script lang="ts">
	import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
	import { useArticleStore } from '@/stores/articleStore'
	import { useRoute } from 'vue-router'
	import { type ArticleInterface }  from '@/model/Interfaces'

    export default {
		name: 'Article',
		data(){
			return{
				articleStore: useArticleStore(),
				articleData: undefined as ArticleInterface | undefined,
			}
		},
		components: {
			Header,
			Footer,
		},
		props: {
			
		},
		async mounted(){
			this.articleData = await useArticleStore().fetchArticleWithId(parseInt(this.$route.params.id as string)) as ArticleInterface
		},
		methods: {
			
		},
    }
</script>   