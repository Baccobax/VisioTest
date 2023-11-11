<template>
	<div>
		<Header />
		<router-view></router-view>
		<Footer />
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
header {
  line-height: 1.5;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
