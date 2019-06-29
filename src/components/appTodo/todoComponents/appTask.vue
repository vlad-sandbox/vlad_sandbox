<template>
<div>
  <div class="wrapperminmaxtask">
    <div class="wrappermintask" @click="flagtask()" :class="{'wrappermaxtask': task.fullmode}">
      <div class="taskstatus" :class=task.status @click="toggleStatus()"><span></span></div>
      <div class="taskname"><h2>{{task.name}}</h2></div>
      <div class="taskdescription">{{task.description}}</div>
      <div v-if="task.fullmode">{{task.date_start | dateFilter}}</div>
      <div v-if="task.fullmode">{{task.date_planning | dateFilter}}</div>
      <md-chips v-if="task.fullmode" v-model="task.tags" md-placeholder="Tags..."></md-chips>
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
  filters: {
    dateFilter (v) {
      try {
        return v.toISOString().split('T')[0].split('-').reverse().join('.')
      } catch (e) {
        return v.split('-').reverse().join('.')
      }
    }
  },
  methods: {
    taskstatusaprufe () {
      if (this.task.status === open) {
        this.prufe = true
      }
    },
    // Переключаем статус задачи (выполнена/открыта)
    toggleStatus () {
      let statusMatrix = {
        'close': 'open',
        'open': 'close'
      }
      this.task.status = statusMatrix[this.task.status]
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
.taskname, .taskdescription
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
  min-height 82px
  transition all .3s
  overflow hidden
.wrappermaxtask
  flex-direction column
  min-height 200px
  transition all .3s
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
.taskstatus
  width 20px
  height 20px
  min-width 20px
  min-height 20px
  border-radius 20px
  display flex
  transition all .3s
  &:hover
    cursor pointer
  &:active
    transform scale(.7, .7)
  &.close
    border 1px solid green
    span
      background green
  &.open
    border 1px solid red
    span
      background red
  span
    width 15px
    height 15px
    margin auto
    border-radius 50%
</style>
