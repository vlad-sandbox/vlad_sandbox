<template>
  <div id="wrap">
  <h1>Draggable</h1>
    <transition-group name="list" tag="div" class="content">
      <div v-for="(group, i) in groups" :key="group.name" class="drag-group" draggable @dragover.prevent
           @dragstart.self="setDragStart($event, $event.target, {groups, group, i, target: 'group'})"
           @drop="setDrop($event, $event.target, {groups, group, i, target: 'group'})"
           @dragend="setDragEnd($event, $event.target, {groups, group, i, target: 'group'})"
           @dragenter.prevent="setDragEnter($event, $event.target, {groups, group, i, target: 'group'})"
           @dragleave="setDragLeave($event, $event.target, {groups, group, i, target: 'group'})">
           <h1>{{group.name}}</h1>
         <transition-group name="list" tag="div" class="content">
            <div v-for="(col, index) in group.list" :key="col.columnName" class="drag-item" draggable @dragover.prevent
               @dragstart.self="setDragStart($event, $event.target, {group, col, index, target: group.name})"
               @drop="setDrop($event, $event.target, {group, col, index, target: group.name})"
               @dragend="setDragEnd($event, $event.target, {group, col, index, target: group.name})"
               @dragenter.prevent.self="setDragEnter($event, $event.target, {group, col, index, target: group.name})"
               @dragleave="setDragLeave($event, $event.target, {group, col, index, target: group.name})">
                 {{col.columnName}}
            </div>
         </transition-group>
       </div>
    </transition-group>
  </div>
</template>

<script>
const dataSet = [
  { name: 'Group 1',
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
  { name: 'Group 2',
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
  { name: 'Group 3',
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
  { name: 'Group 4',
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
export default {
  name: 'draggable-boxes',
  data () {
    return {
      groups: dataSet,
      transfer: {}
    }
  },
  methods: {
    setDragStart (e, t, data) {
      t.style.opacity = '.5'
      this.transfer = data
    },
    setDragEnd (e, t, data) {
      t.style.opacity = '1'
      this.dataTransfer = {}
    },
    setDrop (e, t, data) {
      if (data.target !== this.transfer.target) {
        return e.preventDefault()
      }
      if (data.target === 'group') {
        this.paste(this.transfer.groups, this.transfer.i, data.i, this.transfer.group)
      } else if (data.group.name === this.transfer.group.name) {
        this.paste(this.transfer.group.list, this.transfer.index, data.index, this.transfer.col)
      }
      t.classList.remove('over')
    },
    setDragEnter (e, t, data) {
      if (data.target !== this.transfer.target) {
        e.stopPropagation()
        return e.preventDefault()
      }
      t.classList.add('over')
    },
    setDragLeave (e, t, data) {
      if (data.target !== this.transfer.target) {
        e.stopPropagation()
        return e.preventDefault()
      }
      t.classList.remove('over')
    },
    paste (array, inFrom, inTo, data) {
      array.splice(inFrom, 1)
      array.splice(inTo, 0, data)
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
    transition all .3s

  .drag-group
    border-radius 10px
    flex-grow 1
    &.over
      .content
        transform scale(.9)
        opacity .8

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
    transition all .3s
    &.over
      transform scale(.9)
      opacity .8

  .list-move
    transition transform .5s
</style>
