<template>
	<div id="layout-wrapperVisio">
		<Header />
		<div class="main-contentVisio">
			<router-view></router-view>
		</div>
		<Footer class="footer" />
	</div>
</template>

<script lang="ts">
	import Header from './components/Header.vue'
	import HomePage from './views/HomePage.vue'
	import Footer from './components/Footer.vue'
	import { useArticleStore } from '@/stores/articleStore'

	export default {
		name: 'App',
		components: {
			Header,
			Footer,
			HomePage,
		},
		data(){
			return{
				articleStore: useArticleStore(),	
			}
		},
		methods:{
			
		},
		async mounted(){
			this.articleStore.fetchArticles()
		}
	}
</script>

<style scoped>
	#layout-wrapperVisio{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: rgba(245, 245, 245, 0);
	}

	.main-contentVisio{
		flex-grow: 1;
		
	}
</style>
