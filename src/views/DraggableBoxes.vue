<template>
  <div id="wrap">
  <h1>Draggable</h1>
    <!--<transition-group name="list" tag="div" class="content"> -->
    <!--<div class="content"> 
      <div v-for="(group, groupIndex) in groups[0]" :key="group.name" class="drag-group" draggable> -->
         <transition-group name="list" tag="div" class="content">
            <div v-for="(col, columnIndex) in groups[0].list"
                 :key="col.columnName + columnIndex + groups[0].name" class="drag-item" draggable
                 @dragstart="setDragStart($event, $event.target, {col, columnIndex, groupIndex: 0})"
                 @drop="setDrop($event, $event.target, {col, columnIndex, groupIndex: 0})"

                 @dragend="setDragEnd($event.target)"
                 @dragover.prevent="() => {}"
                 @dragenter.prevent="setDragEnter($event, $event.target, {col, columnIndex, groupIndex: 0})"
                 @dragleave="setDragLeave($event.target)">{{col.columnName}}</div>
         </transition-group>
       <!-- </div>
       transition-group> -->
  <!-- </div> -->
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
  }
]
export default {
  name: 'draggable-boxes',
  data () {
    return {
      groups: dataSet,
      dataTransfer: {}
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    setDragStart (e, trgt, data) {
      trgt.style.opacity = '.5'
      /* e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.setData('json', JSON.stringify(data))
      console.log(JSON.stringify(data)) */
      this.dataTransfer = data
    },
    setDrop (e, trgt, dropTarget) {
      // let data = JSON.parse(e.dataTransfer.getData('json'))
      let data = this.dataTransfer
      console.log(data)
      /* colDropped = this.columns.filter(el => el.columnName === colDropped.columnName)[0]
      let toIndex = this.columns.findIndex(el => el.columnName === cc.columnName) */
      this.groups[data.groupIndex].list.splice(data.columnIndex, 1)
      this.groups[dropTarget.groupIndex].list.splice(dropTarget.columnIndex, 0, data.col)
      trgt.classList.remove('over')
    },
    setDragEnd (e) {
      e.style.opacity = '1'
      this.dataTransfer = {}
    },
    setDragEnter (e, trgt, item) {
      if (item.groupIndex === this.dataTransfer.groupIndex) {
        trgt.classList.add('over')
      }
    },
    setDragLeave (e) {
      e.classList.remove('over')
    }
  },
  computed: {
    columnsComputed () {
      return this.columns.reduce((pr, cur) => pr.list.concat(cur.list))
    }
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
    border 1px solid #42b983
    border-radius 15px
    margin 15px

  .drag-group
    border-radius 10px

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
    transition transform 5s
</style>
