<template>
<div class="task_wrapper">
  <md-field>
    <label>Название</label>
    <md-input v-model="task.name" md-counter="30" required></md-input>
    <span class="md-error">Обязательное поле</span>
  </md-field>
  <md-field>
    <label>Описание</label>
    <md-input v-model="task.description"></md-input>
  </md-field>
  <md-field>
    <md-icon>access_time</md-icon>
    <label>Время</label>
    <md-input v-model="task.time" type="time"></md-input>
  </md-field>
  <md-field>
    <md-icon>event</md-icon>
    <label>Планируемая дата</label>
    <md-input v-model="task.date_planning" type="date"></md-input>
  </md-field>
  <md-chips v-model="task.tags" md-placeholder="Tags..."></md-chips>
  <md-button class="md-primary" @click="closeeditflag">Редактировать</md-button>
</div>
</template>
<script>
export default {
  name: 'app-task-edit',
  props: ['editflag', 'task'],
  data () {
    return {}
  },
  watch: {
  },
  methods: {
    closeeditflag () {
      this.$emit('closewindow')
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
