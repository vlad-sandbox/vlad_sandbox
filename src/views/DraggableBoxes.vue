<template>
  <div id="wrap">
  <h1>Draggable</h1>
   <transition-group name="list"
         tag="div"
         class="content">
      <div v-for="col in columns"
           :key="col.columnName"
           class="drag-item"
           draggable
           @dragstart="setDragStart($event, $event.target, col)"
           @dragend="setDragEnd($event.target)"
           @dragover.prevent="() => {}"
           @dragenter.prevent="setDragEnter($event.target)"
           @drop="setDrop($event, $event.target, col)"
           @dragleave="setDragLeave($event.target)">{{col.columnName}}</div>
    </transition-group>
  </div>
</template>

<script>
const dataSet = [
  { 'columnName': 'Column 1', 'order': 1, 'pinned': false },
  { 'columnName': 'Column 2', 'order': 2, 'pinned': false },
  { 'columnName': 'Column 3', 'order': 3, 'pinned': false },
  { 'columnName': 'Column 4', 'order': 4, 'pinned': false },
  { 'columnName': 'Column 5', 'order': 5, 'pinned': false },
  { 'columnName': 'Column 6', 'order': 6, 'pinned': false },
  { 'columnName': 'Column 7', 'order': 7, 'pinned': false }
]
export default {
  name: 'draggable-boxes',
  data () {
    return {
      columns: dataSet
    }
  },
  watch: {
  },
  methods: {
    setDragStart (e, trgt, col) {
      trgt.style.opacity = '.5'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.setData('json', JSON.stringify(col))
    },
    setDrop (e, trgt, cc) {
      let colDropped = JSON.parse(e.dataTransfer.getData('json'))
      let fromIndex = this.columns.findIndex(el => el.columnName === colDropped.columnName)
      colDropped = this.columns.filter(el => el.columnName === colDropped.columnName)[0]
      let toIndex = this.columns.findIndex(el => el.columnName === cc.columnName)
      this.columns.splice(fromIndex, 1)
      this.columns.splice(toIndex, 0, colDropped)
      trgt.classList.remove('over')
    },
    setDragEnd (e) {
      e.style.opacity = '1'
    },
    setDragEnter (e) {
      e.classList.add('over')
    },
    setDragLeave (e) {
      e.classList.remove('over')
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus" scoped>
  #wrap
    display flex
    flex-direction column
    margin 0 15%

  .content
    display flex
    flex-direction column
    background-color white
    border-radius 15px

  .drag-item
    position relative
    padding 20px
    font-size 20px
    font-weight bold
    background-color #03a9f4
    border-radius 10px
    display inline-flex
    align-items center
    color white
    cursor move
    margin 10px
    &:after
      content ''
      position absolute
      width 0%
      height 4px
      border-radius 2px
      background-color grey
      bottom -10px
      left 50%
      margin-right -50%
      transform translate(-50%, -50%)
      transition all .3s
    &.over
      &:after
        width 80%
  .list-move
    transition transform .3s
</style>
