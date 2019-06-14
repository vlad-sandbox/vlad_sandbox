<template>
<div class="task_wrapper">
  <md-field>
    <label>Название</label>
    <md-input v-model="taskData.name" md-counter="30" required></md-input>
    <span class="md-error">Обязательное поле</span>
  </md-field>
  <md-field>
    <label>Описание</label>
    <md-input v-model="taskData.description"></md-input>
  </md-field>
  <md-field>
    <md-icon>access_time</md-icon>
    <label>Время</label>
    <md-input v-model="taskData.time" type="time"></md-input>
  </md-field>
  <md-field>
    <md-icon>event</md-icon>
    <label>Планируемая дата</label>
    <md-input v-model="taskData.date_planning" type="date"></md-input>
  </md-field>
  <md-chips v-model="taskData.tags" md-placeholder="Tags..."></md-chips>
  <md-button class="md-primary" @click="createNewTask">Создать</md-button>
</div>
</template>
<script>
const taskClear = {
  name: '',
  description: '',
  status: 'open',
  date_planning: new Date(),
  time: new Date().getTime(),
  date_start: new Date(),
  tags: []
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
        date_start: new Date(),
        tags: []
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
// Для телефонов
@media (orientation: portrait)
  .task_wrapper
    width 100% !important
.task_wrapper
  width 400px
  background-color white
  padding 20px
  display flex
  flex-direction column
</style>
