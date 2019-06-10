<template>
<div class="wrapper_list">
  <div v-for="item in data" class="child" :key="item.date">
    <h3 class="label">{{item.date}}</h3>
    <div class="wrapper_tasks">
      <app-task v-for="(task, i) in item.tasks" :task="task" :key="'task' + i"></app-task>
    </div>
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

.wrapper_list
  overflow-y auto
  max-height 100%
  width 40%
  margin 0 auto
  padding 10px
  border-radius 10px
  scroll-behavior smooth
  .child
    .wrapper_tasks
      border-radius 10px 0px 0px 10px
    &:nth-child(1)
      .wrapper_tasks
        border-left 5px solid #00bcd4
    &:nth-child(2)
      .wrapper_tasks
        border-left 5px solid #8bc34a
    &:nth-child(3)
      .wrapper_tasks
        border-left 5px solid #ff9800
    &:nth-child(4)
      .wrapper_tasks
        border-left 5px solid #9c27b0
  &::-webkit-scrollbar
    width 3px
  &::-webkit-scrollbar:horizontal
    height 3px
  &::-webkit-scrollbar-track
    background-color #eaeaea
  &::-webkit-scrollbar-thumb
    background-color #7fcaa8

.wrapper_tasks
  box-shadow 0px 0px 3px #757575
  background-color white
  padding 15px
  margin 0px 0px 25px 0px

.label
  color #546e7a
  margin 0
  padding-left 20px
  text-align left
</style>
