<template>
<div>
  <div>
    <div class="wrappermintask">
      <div class="taskname">{{task.name}}</div>
      <div class="taskplanning">{{task.date_planning}}</div>
      <div class="taskstatusoff" :class=task.status><!--{{task.status}}--></div>
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
      prufe: false
    }
  },
  watch: {
  },
  methods: {
    taskstatusaprufe () {
      if (this.task.status === open) {
        this.prufe = true
      }
      console.log(this.prufe)
    }
  },
  components: {
  }
}
</script>
<style scoped lang="stylus">
.taskname, .taskplanning
  flex-grow 1
.wrappermintask {
  display flex
  justify-content space-between
  align-items center
  border 1px solid
  border-radius 10px
  margin 10px
  padding 20px
  word-wrap break-word
}
.close, .open
  width 20px
  height 20px
  border-radius 20px
  border 1px solid green
  margin-top 5px
  margin-right 5px
.open
  border 1px solid red
</style>
