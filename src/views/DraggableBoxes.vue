<template>
  <div id="wrap">
  <h1>Draggable</h1>
    <transition-group name="list" tag="div" class="content">
      <div v-for="(group, i) in groups" :key="group.name" class="drag-group" draggable
           @dragstart.self="setDragStart($event, $event.target, {groups, group, i})"
           @drop="setDropGroup($event, $event.target, {groups, group, i})"
           @dragend="setDragEnd($event.target)"
           @dragover.prevent="() => {}"
           @dragenter.prevent="setDragEnter($event.target, group, true)"
           @dragleave="setDragLeave($event, $event.target, group)">
         <transition-group name="list" tag="div" class="content">
            <div v-for="(col, index) in group.list"
               :key="col.columnName" class="drag-item" draggable
               @dragstart="setDragStart($event, $event.target, {group, col, index})"
               @drop="setDrop($event, $event.target, {group, col, index})"
               @dragend="setDragEnd($event.target)"
               @dragover.prevent="() => {}"
               @dragenter.prevent="setDragEnter($event.target, group)"
               @dragleave="setDragLeave($event.target)">{{col.columnName}}</div>
         </transition-group>
       </div>
    </transition-group>
  </div>
</template>

<script>
const dataSet = [
  { name: 'group 1',
    list: [
      { 'columnName': 'Column 1', 'order': 1, 'pinned': false },
      { 'columnName': 'Column 2', 'order': 2, 'pinned': false },
      { 'columnName': 'Column 3', 'order': 3, 'pinned': false },
      { 'columnName': 'Column 4', 'order': 4, 'pinned': false },
      { 'columnName': 'Column 5', 'order': 5, 'pinned': false },
      { 'columnName': 'Column 6', 'order': 6, 'pinned': false },
      { 'columnName': 'Column 7', 'order': 7, 'pinned': false }
    ]
  },
  { name: 'group 2',
    list: [
      { 'columnName': 'Column 1', 'order': 1, 'pinned': false },
      { 'columnName': 'Column 2', 'order': 2, 'pinned': false },
      { 'columnName': 'Column 3', 'order': 3, 'pinned': false },
      { 'columnName': 'Column 4', 'order': 4, 'pinned': false },
      { 'columnName': 'Column 5', 'order': 5, 'pinned': false },
      { 'columnName': 'Column 6', 'order': 6, 'pinned': false },
      { 'columnName': 'Column 7', 'order': 7, 'pinned': false }
    ]
  },
  { name: 'group 5',
    list: [
      { 'columnName': 'Column 1', 'order': 1, 'pinned': false },
      { 'columnName': 'Column 2', 'order': 2, 'pinned': false },
      { 'columnName': 'Column 3', 'order': 3, 'pinned': false },
      { 'columnName': 'Column 4', 'order': 4, 'pinned': false },
      { 'columnName': 'Column 5', 'order': 5, 'pinned': false },
      { 'columnName': 'Column 6', 'order': 6, 'pinned': false },
      { 'columnName': 'Column 7', 'order': 7, 'pinned': false }
    ]
  },
  { name: 'group 4',
    list: [
      { 'columnName': 'Column 1', 'order': 1, 'pinned': false },
      { 'columnName': 'Column 2', 'order': 2, 'pinned': false },
      { 'columnName': 'Column 3', 'order': 3, 'pinned': false },
      { 'columnName': 'Column 4', 'order': 4, 'pinned': false },
      { 'columnName': 'Column 5', 'order': 5, 'pinned': false },
      { 'columnName': 'Column 6', 'order': 6, 'pinned': false },
      { 'columnName': 'Column 7', 'order': 7, 'pinned': false }
    ]
  }
]
const dataSetColumns = [
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
      groups: dataSet,
      columns: dataSetColumns,
      dataTransfer: {}
    }
  },
  methods: {
    setDragStart (e, trgt, data) {
      trgt.style.opacity = '.5'
      this.dataTransfer = data
    },
    setDrop (e, trgt, dropTarget) {
      let data = this.dataTransfer
      if (this.dataTransfer.i !== undefined) {
        return e.preventDefault()
      }
      if (dropTarget.group.name === data.group.name) {
        data.group.list.splice(data.index, 1)
        data.group.list.splice(dropTarget.index, 0, data.col)
        trgt.classList.remove('over')
      }
    },
    setDropGroup (e, trgt, dropTarget) {
      if (this.dataTransfer.index !== undefined) {
        return e.preventDefault()
      }
      let data = this.dataTransfer
      data.groups.splice(data.i, 1)
      data.groups.splice(dropTarget.i, 0, data.group)
      trgt.classList.remove('over')
    },
    setDragEnd (t) {
      t.style.opacity = '1'
      this.dataTransfer = {}
    },
    setDragEnter (t, group, primaryAdd) {
      if (group.name === this.dataTransfer.group.name || primaryAdd) {
        t.classList.add('over')
      }
    },
    setDragLeave (e, t, group) {
      t.classList.remove('over')
    }
  }
}
</script>
<style lang="stylus" scoped>
  #wrap
    display flex
    flex-direction column
    margin 0 15%
    >.content
      flex-direction row
      justify-content space-between

  .content
    display flex
    flex-direction column
    background-color white
    border 1px solid #42b983
    border-radius 15px
    margin 15px

  .drag-group
    border-radius 10px
    flex-grow 1
    &.over
      .content
        border 2px dotted green

  .drag-item
    position relative
    padding 10px
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
    transition transform .5s
</style>
