import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'
import NewArticle from '../views/NewArticle.vue'
import Article from '../views/Article.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
		{
			path: '/NewArticle',
			name: 'newArticle',
			component: NewArticle,
		},
		{
			path: '/Article/:id',
      name: `Article`,
      component: Article,
		},
  ]
})

export default router
