<template>
    <app-task-list :data="data"></app-task-list>
</div>

</template>

<script>
import appTaskList from './todoComponents/appTaskList'
export default {
  name: 'todo',
  data () {
    return {
      data: []
    }
  },
  methods: {
  },
  components: {
    appTaskList
  }
}
</script>

<style>
</style>
