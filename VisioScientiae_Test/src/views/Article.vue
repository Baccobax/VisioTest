<template>
	<HomeButton />
	<div class="ms-2">
		<h1 class="articleTitle">{{ articleData?.title }}</h1>
		<div class="ms-1">
			<p class="articleInfo">Author: {{ articleData?.author }}</p>
			<p class="articleInfo">Date of creation: {{ formattedDate() }}</p>
			<p class="articleContent">{{ articleData?.content }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import HomeButton from '@/components/HomeButton.vue'
	import { useArticleStore } from '@/stores/articleStore'
	import { type ArticleInterface }  from '@/model/Interfaces'
	import dayjs, { Dayjs } from 'dayjs'

    export default {
		name: 'Article',
		data(){
			return{
				articleStore: useArticleStore(),
				articleData: undefined as ArticleInterface | undefined,
			}
		},
		async mounted(){
			this.articleData = await this.articleStore.fetchArticleWithId(parseInt(this.$route.params.id as string)) as ArticleInterface
		},
		components: {
			HomeButton,
		},
		methods: {
			formattedDate()
			{
				return this.articleData ? dayjs(this.articleData.date).format('DD/MM/YYYY') : ''
			},
		},
    }
</script>