<template>
<div>
  <div class="wrapperminmaxtask">
    <div class="wrappermintask" @click="flagtask()" :class="{'wrappermaxtask': task.fullmode}">
      <div class="taskname">{{task.name}}</div>
      <div class="taskplanning">{{task.date_planning}}</div>
      <div class="taskstatusoff" :class=task.status><!--{{task.status}}--></div>
      <div v-if = "task.fullmode">{{task.date_start}}</div>
      <div v-if = "task.fullmode">{{task.description}}</div>
    </div>
    <div v-if = "task.fullmode" class="xstyle" @click.self="xstyleTask()">X</div>
    <div v-if = "task.fullmode" class="rstyle" @click.self="RstyleTask()">R</div>
    <md-dialog :md-active.sync="editflag">
      <md-dialog-title>Редактирование задачи</md-dialog-title>
      <app-task-edit @closewindow="RstyleTask" :editflag="editflag" :task="task"></app-task-edit>
    </md-dialog>
  </div>
</div>
</template>
<script>
import appTaskEdit from './appTaskEdit'
export default {
  name: 'task-list',
  props: ['task'],
  data () {
    return {
      prufe: false,
      editflag: false
    }
  },
  watch: {
  },
  methods: {
    taskstatusaprufe () {
      if (this.task.status === open) {
        this.prufe = true
      }
    },
    flagtask () {
      this.$emit('pushclose', this.task.fullmode)
      this.task.fullmode = true
    },
    xstyleTask () {
      this.task.fullmode = false
    },
    RstyleTask () {
      this.editflag = !this.editflag
    }
  },
  components: {
    appTaskEdit
  }
}
</script>
<style scoped lang="stylus">
.taskname, .taskplanning
  flex-grow 1
.wrapperminmaxtask
  position relative
.wrappermintask
  display flex
  justify-content space-between
  align-items center
  border 1px solid
  border-radius 10px
  margin 10px
  padding 20px
  word-wrap break-word
  height 82px
  transition all .3s
.wrappermaxtask
  flex-direction column
  height 188px
  transition all .3s
  overflow hidden
.close, .open
  width 20px
  height 20px
  border-radius 20px
  border 1px solid green
  margin-top 5px
  margin-right 5px
.open
  border 1px solid red
.xstyle
  position absolute
  right 25px
  top 10px
  &:hover
    cursor pointer
.rstyle
  position absolute
  right 25px
  top 30px
  &:hover
    cursor pointer
</style>
