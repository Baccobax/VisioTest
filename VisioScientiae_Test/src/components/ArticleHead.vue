<template>
    <div class="ms-2">
        <div class="container-fluid">
            <h1 class="articleTitle"> 
                <router-link class="text-primary router-link" :to="{ name: `Article`, params: { id: articleHead.id } }">{{ articleHead.title }}</router-link>
            </h1>
            <p class="h5 text-secondary articleInfo"> Written by <span class="authorBold">{{ articleHead.author }}</span></p>
            <p class="h5 text-secondary articleInfo" v-html="introCutter(articleHead.content)"/>
            <p class="h5 text-dark articleInfo">{{ formattedDate() }}</p>
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
</style>