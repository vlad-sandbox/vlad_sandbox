<template>
<div class="task_wrapper">
  <label>Название: <input v-model="taskData.name"></label>
  <label>Описание: <input v-model="taskData.description"></label>
  <label>Время: <input type="time" v-model="taskData.time"></label>
  <label>Планируемая дата: <input type="date" v-model="taskData.date_planning"></label>
  <button @click="createNewTask">Создать</button>
</div>
</template>
<script>
const taskClear = {
  name: '',
  description: '',
  status: 'open',
  date_planning: new Date(),
  time: new Date().getTime(),
  date_start: new Date()
}

export default {
  name: 'app-task-manager',
  data () {
    return {
      taskData: {
        name: '',
        description: '',
        status: 'open',
        date_planning: new Date(),
        time: new Date().getTime(),
        date_start: new Date()
      }
    }
  },
  watch: {
  },
  methods: {
    createNewTask () {
      let data = this.taskData
      this.$emit('create', data)
      this.taskData = taskClear
    }
  },
  components: {
  }
}
</script>
<style scoped lang="stylus">
.task_wrapper
  position absolute
  top 10px
  right 10px
  border 1px solid black
  display flex
  flex-direction column
</style>
