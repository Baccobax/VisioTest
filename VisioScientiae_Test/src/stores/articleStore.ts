import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleInterface } from '@/model/Interfaces';

export const useArticleStore = defineStore('articleStore' ,{
    state: () => ({
        id: 0 as number,
        articles: [] as ArticleInterface[],
    }),
    actions: {
        storeArticle(id: number){
            this.id = id
        },
        async fetchArticleWithId(id : number): Promise<ArticleInterface>{
            const res = await fetch(`http://localhost:5000/${id}`);
            const dbData = await res.json();
            return dbData;
        },
        async fetchArticles(): Promise<ArticleInterface>{
            const res = await fetch('http://localhost:5000/');
            const data = await res.json();
            this.articles = data;
            return data;
        },
        async postArticle(article: ArticleInterface): Promise<ArticleInterface>{
            const res = await fetch('http://localhost:5000/NewArticle', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(article)
            })
            this.fetchArticles();
            return res.json();
        },
    },
    getters: {
        getArticles: (state) => {
            return state.articles;
        }
    }
})
  