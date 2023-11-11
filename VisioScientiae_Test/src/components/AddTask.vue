<template>
    <form @submit="onSubmit" class="add-task">
        <div>
        <label>Task</label>
            <input type="text" v-model="text" placeholder="Add Task">
        </div>
        <div>
            <label>Day & Time</label>
            <input type="text" v-model="day" placeholder="Add Day & Time">
        </div>
        <div>
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" />
        </div>
        <input type="submit" value="Save Task" class="btn">
    </form>
    <br>
</template>

<script lang="ts">
    export default{
        name: 'AddTask',
        data(){
            return{
                text: '',
                day: '',
                reminder: false,
            }
        },
        methods: {
            onSubmit(e : Event)
            {
                e.preventDefault();
                if(!this.text)
                {
                    alert('Please add a task');
                    return;
                }
                const newTask = {
                    id: Math.floor(Math.random() * 10000), 
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder,
                }

                this.$emit('add-task' , newTask);

                this.text = '';
                this.day = '';
                this.reminder = false;
            }
        }
    }
</script>