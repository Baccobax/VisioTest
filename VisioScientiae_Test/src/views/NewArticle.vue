<template>
  <HomeButton />
    <form class="mt-2">
      <div class="form-control">
        <label>Title</label>
        <input class="form-control form-control-check" type="text" v-model="title" name="text" placeholder="Add title" />
      </div>
      <div class="mt-2 form-control form-control-check">
        <label>Author</label>
        <input class="form-control form-control-check" type="text" v-model="author" name="author" placeholder="Author:" />
      </div>
      <div class="m-2">
        <ckeditor class="form-control" :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
      </div>
      <button @click="onSubmit" class="d-flex btn btn-primary btn-lg ms-auto me-2"> Save Article </button>
    </form>
  </template>
  
<script lang="ts">
    import HomeButton from '@/components/HomeButton.vue'
    import ArticleList from '@/components/ArticleList.vue'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    import type { ArticleInterface } from '@/model/Interfaces'
    import { useArticleStore } from '@/stores/articleStore'

    export default {
        name: 'AddArticle',
        components: {
            ArticleList,
            HomeButton,
        },
        data() {
            return {
                title: '' as string,
                content: '' as string,
                author: '' as string,
                ArticleList: Array<ArticleInterface>(),
                articleStore: useArticleStore(),
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'indent',
                            'outdent',
                            '|',
                            'mediaEmbed',
                            'undo',
                            'redo'
                        ]
                    },
                    language: 'en'
                }
            }
        },
        methods: {
            async onSubmit() {
                if (!this.title) {
                  alert('Please add at least a title')
                  return
                }
                const newArticle = {
                title: this.title,
                content: this.content,
                author: this.author,
                }  as ArticleInterface
                
                this.articleStore.postArticle(newArticle)
            },
        },
    }
</script>
  