<template>
<div>
  <div>
    <div class="wrappermintask">
      <div class="taskname">{{task.name}}</div>
      <div class="taskplanning">{{task.date_planning}}</div>
      <div class="taskstatus">{{task.status}}</div>
    </div>
    <!-- <div>{{task.date_start}}</div>
    <div>{{task.description}}</div> -->
  </div>
</div>
</template>
<script>
export default {
  name: 'task-list',
  props: ['task'],
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
  },
  components: {
  }
}
</script>
<style scoped lang="stylus">
.wrappermintask {
  display flex
  border 1px solid
  border-radius 20px
  margin-bottom 10px
  word-wrap break-word
}
</style>
