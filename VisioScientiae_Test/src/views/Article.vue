<template>
	<HomeButton />
	<div class="m-2 card">
		<h1 class="articleTitle card-header">{{ articleData?.title }}</h1>
		<div class="ms-1 card-header">
			<p class="articleInfo mt-3">Author: {{ articleData?.author }}</p>
			<p class="articleInfo">Date of creation: {{ formattedDate() }}</p>
		</div>
		<div class="card-body ms-1">
			<p class="articleContent" v-html="articleData?.content" />
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
			this.articleData = await this.articleStore.fetchArticleWithId(this.$route.params.id as string) as ArticleInterface
		},
		components: {
			HomeButton,
		},
		methods: {
			formattedDate()
			{
				return this.articleData ? dayjs(this.articleData.date).format('DD/MM/YYYY HH:mm') : ''
			},
		},
    }
</script>