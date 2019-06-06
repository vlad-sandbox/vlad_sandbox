<template>
  <div v-for="(item) in data">
    <div v-for="(tasks) in task">    
</div>
</template>
<script>
import appTaskList from './todoComponents/appTask'
export default {
  name: 'app-task-list',
  props: ['task'],
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
</style>
