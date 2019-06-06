<template>
<div class="wrapper_list">
  <div v-for="item in data" class="wrapper_tasks">
    <h2 class="label">{{item.date}}</h2>
    <app-task v-for="task in item.tasks" :task="task">
  </app-task>
  </div>
</div>
</template>
<script>
import appTask from './appTask'
export default {
  name: 'app-task-list',
  props: ['data'],
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
  },
  components: {
    appTask
  }
}
</script>
<style scoped lang="stylus">
.wrapper_list, .wrapper_tasks
  display flex
  flex-direction column
  justify-content center

.wrapper_list
  width 40%
  margin 0 auto
  padding 10px
  border-radius 10px
  background-color #e0e0e0

.wrapper_tasks
  border 1px solid #546e7a
  background-color white
  padding 5px
  margin 5px

.label
  color #546e7a
</style>
