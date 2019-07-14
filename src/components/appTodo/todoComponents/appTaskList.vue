<template>
<div class="wrapper_list">
  <div v-for="item in data" class="child" :key="item.date">
    <h3 class="label">{{item.date}}</h3>
    <div class="wrapper_tasks">
        <template v-for="(task, i) in item.tasks">
          <transition name="task" :key="'task' + i">
            <app-task v-if="task.visible" :task="task" :key="'task' + i" @pushclose = "runclosetasks" @pushdel = "deltask"></app-task>
          </transition>
        </template>
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
    runclosetasks (fullmode) {
      this.$emit('pushclose', fullmode)
    },
    deltask (keydel) {
      this.data.forEach(items => {
        items.tasks.forEach((item, i) => {
          if (keydel === item.key) {
            items.tasks.splice(i, 1)
          }
        })
      })
    }
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
// Для телефонов
@media (orientation: portrait)
  .wrapper_list
    width 100% !important

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

.label
  color #546e7a
  padding-left 20px
  font-size 22px
  text-align left

.task-enter-active, .task-leave-active
  transition all .5s ease

.task-enter
  transform translateX(-100%) scale(1, 0)
  opacity 0

.task-leave-to
  transform translateX(100%) scale(1, 0)
  opacity 0

</style>
