<template>
    <div @dblclick="$emit('toggle-reminder' , task.id)" :class="[task.reminder ? 'reminder' : '' , 'task']">
        <p> {{ task.id }}</p>
        <h3> {{ task.text }}
            <i @click="onDelete(task.id)" class="fas fa-times" style="color: red;"></i>
        </h3>
        <p> {{ task.day }}</p>
        <p> {{ task.reminder }}</p>
    </div>
    
</template>

<script lang="ts">
    export default{
        name: 'Task',
        props:
        {
            task: {
                type: Object as () => {id: number , text: string , day: string , reminder: boolean},
                required: true
            }
        },
        methods: {
            onDelete(id: number)
            {
                this.$emit('delete-task' , id);
            }
        }
    }
</script>