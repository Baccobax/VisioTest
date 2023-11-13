<template>
    <div class="m-2 card">
        <div class="m-2">
            <h1 class="articleTitle card-header"> 
                <router-link class="text-primary router-link" :to="{ name: `Article`, params: { id: articleHead.id } }">{{ articleHead.title }}</router-link>
            </h1>
            <div class="card-body">
                <p class="h5 text-secondary articleInfo"> Written by <span class="authorBold">{{ articleHead.author }}</span></p>
                <p class="h5 text-secondary articleInfo" v-html="introCutter(articleHead.content)"/>
                <p class="h5 text-dark articleInfo dateArticleLeft">{{ formattedDate() }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import type { ArticleInterface } from '@/model/Interfaces';
    import { useArticleStore } from '@/stores/articleStore'
    import dayjs from 'dayjs'

	

    export default{
        name: 'articleHead',
        data(){
            return{
                articleStore: useArticleStore(),
            }
        },
        props: {
            articleHead: {
                type: Object as () => ArticleInterface,
                required: true
            }
        },
        methods: {
            introCutter(content: string)
            {
                if(content.length > 10)
                {
                    return content.slice(0 , 10) + '...';
                }
                else
                {
                    return content;
                }
            },
            formattedDate()
			{
				return this.articleHead ? dayjs(this.articleHead.date).format('DD/MM/YYYY HH:mm') : ''
			}
        }
    }
</script>

<style scoped>
    .router-link{
        text-decoration: none;
    }

    .router-link:hover{
        text-decoration: underline;
        text-decoration-color: blue;
    }

    .authorBold{
        font-weight: bold;
    }


    .dateArticleLeft{
        text-align: right;
    }
</style>