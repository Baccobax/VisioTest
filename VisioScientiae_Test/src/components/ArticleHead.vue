<template>
    <div>
        <h1> 
            <router-link :to="{ name: `Article`, params: { id: articleHead.id } }">{{ articleHead.title }}</router-link>
        </h1>
        <h3> {{ introCutter(articleHead.content) }} </h3>
        <h3>{{ articleHead.date }}</h3>
    </div>
</template>

<script lang="ts">
    import type { ArticleInterface } from '@/model/Interfaces';
    import { useArticleStore } from '@/stores/articleStore'

	

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
        }
    }
</script>