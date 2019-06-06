<template>
<div>
  <div v-for="item in data">
    <p>{{item.date}}</p>
  <app-task v-for="task in item.tasks" :task="task">
  </app-task>
  </div>
</div>
</template>
<script>
import appTask from './appTask'
export default {
  name: 'app-task-list',
  props: ['date'],
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
</style>
