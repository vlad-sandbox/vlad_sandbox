<template>
<div>
  <div class="wrapper_task">
    <div class="task_status" :class=task.status @click="toggleStatus()"><span></span></div>
    <img :src="require('@/assets/icons/' + task.iconname)" width="60" height="60"/>
    <div class="wrapper_fields">
      <div class="task_name"><h2>{{task.name}}</h2></div>
      <div class="task_description"><p>{{task.description}}</p></div>
    </div>
    <div class="task_operations">
      <!-- <div class="close"><md-icon @click.native.self="close()">close</md-icon></div> -->
      <div class="redact"><md-icon @click.native.self="redact()">edit</md-icon></div>
    </div>
    <md-dialog :md-active.sync="editflag">
      <md-dialog-title>Редактирование задачи</md-dialog-title>
      <app-task-edit @closewindow="redact" :editflag="editflag" :task="task"></app-task-edit>
    </md-dialog>
    <div class="task_time"><p>{{task.time}}</p></div>
    <div class="task_tags">
        <span v-for="tag in task.tags" :key="tag">#{{tag}}</span>
      </div>
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
      icon: Math.floor(Math.random() * (41 - 1)) + 1,
      editflag: false
    }
  },
  watch: {
  },
  methods: {
    // Переключаем статус задачи (выполнена/открыта)
    toggleStatus () {
      let statusMatrix = {
        'close': 'open',
        'open': 'close'
      }
      this.task.status = statusMatrix[this.task.status]
    },
    close () {
      this.task.fullmode = false
    },
    redact () {
      this.editflag = !this.editflag
    }
  },
  components: {
    appTaskEdit
  }
}
</script>
<style scoped lang="stylus">
.wrapper_task
  position relative
  min-height 100px 
  display flex
  align-items center
  word-wrap break-word
  transition all .3s
  margin 5px
  background white
  box-shadow 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
  h2
    font-weight 500
    font-size 20px
    font-family Roboto,sans-serif
    color #455a64
    margin 5px 0px
    text-align left
  p
    color #8f8f8f
    margin 0
    text-align left
  img
    margin 5px
  .wrapper_fields
    display flex
    flex-direction column
    flex-grow 1
    height 100px
    padding 10px

.task_time
  position absolute
  bottom 5px
  left 5px
.task_status
  position absolute
  top 5px
  left 5px
  width 20px
  height 20px
  border-radius 50%
  display flex
  span
    width 10px
    height 10px
    border-radius 50%
    margin auto
  &.open
    span
      background green
  &.close
    span
      background red

.task_operations
  display flex
  flex-direction column
  height 100px
  margin 5px
  .close, .redact
    width 20px
    height 20px
    margin 5px

.task_tags
  position absolute
  right 5px
  bottom 5px
  color grey
  display flex
  flex-direction row-reverse
  width 80%
  overflow-x auto
  span
    margin-right 5px
  &::-webkit-scrollbar
    height 3px
    width 3px
  &::-webkit-scrollbar-track
    background-color #eaeaea
  &::-webkit-scrollbar-thumb
    background-color #7fcaa8
</style>
