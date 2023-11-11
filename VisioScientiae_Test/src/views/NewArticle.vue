<template>
    <form @submit="onSubmit" class="card card-body">
      <div class="form-control">
        <label>Title</label>
        <input type="text" v-model="title" name="text" placeholder="Add title" />
      </div>
      <div class="form-control form-control-check">
        <label>Author</label>
        <input type="text" v-model="author" name="author" placeholder="Author:" />
      </div>
      <div class="form-control form-control-check">
        <label></label>
        <input type="text" v-model="content" name="content" placeholder="Write the body of the article here" />
      </div>
      <div class="form-control">
        <label>Day</label>
        <input
          type="date"
          v-model="date"
          name="day"
          placeholder="Add Day & Time"
        />
      </div>
      <input type="submit" value="Save Article" class="btn-block" />
    </form>
    <router-link to="/" class="btn">Back</router-link>
  </template>
  
<script lang="ts">
    import ArticleList from '@/components/ArticleList.vue'
    import type { ArticleInterface } from '@/model/Interfaces'
    import { useArticleStore } from '@/stores/articleStore'

    export default {
        name: 'AddArticle',
        components: {
            ArticleList,
        },
        data() {
            return {
                title: '' as string,
                content: '' as string,
                author: '' as string,
                date: new Date,
                ArticleList: Array<ArticleInterface>(),
                articleStore: useArticleStore(),
            }
        },
        methods: {
            onSubmit(e: Event) {
                e.preventDefault()

                if (!this.title) {
                  alert('Please add at least a title')
                  return
                }

                const newArticle = {
                title: this.title,
                content: this.content,
                author: this.author,
                date: this.date
                }  as ArticleInterface
                
                this.articleStore.postArticle(newArticle)
            },
        },
    }
</script>
  