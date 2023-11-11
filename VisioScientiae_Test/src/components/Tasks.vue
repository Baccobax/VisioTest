<template>
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggle-reminder' , task.id)" @delete-task="$emit('delete-task' , task.id)" :task="task" />
    </div>
</template>

<script lang = 'ts'>
    import Task from './Task.vue';

    export default
    {
        name: 'tasks',
        props: {
            tasks: {
                type: Array<{id: number , text: string , day: string , reminder: boolean}>,
                required: true}
        },
        components:
        {
            Task,
        },
        emits: ['delete-task' , 'toggle-reminder']
    }
</script>

<style scoped>
    
</style>