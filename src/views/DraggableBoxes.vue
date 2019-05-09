<template>
  <div id="wrap">
  <h1>Draggable</h1>
    <drag-drop :data="groups" target="group" @moved="logme">
    </drag-drop>
  </div>
</template>

<script>
import DragDrop from '@/libs/DragDrop.vue'
const dataSet = [
  { name: 'Group 1',
    visible: true,
    pinned: false,
    items: [
      { 'name': 'Column 11', visible: true, 'pinned': false },
      { 'name': 'Column 12', visible: true, 'pinned': false },
      { 'name': 'Column 13', visible: true, 'pinned': false },
      { 'name': 'Column 14', visible: true, 'pinned': false },
      { 'name': 'Column 15', visible: true, 'pinned': false },
      { 'name': 'Column 16', visible: true, 'pinned': false },
      { 'name': 'Column 17', visible: true, 'pinned': false }
    ]
  },
  { name: 'Group 2',
    visible: true,
    pinned: false,
    items: [
      { 'name': 'Column 11', visible: true, 'pinned': false },
      { 'name': 'Column 12', visible: true, 'pinned': false },
      { 'name': 'Column 13', visible: true, 'pinned': false },
      { 'name': 'Column 14', visible: true, 'pinned': false },
      { 'name': 'Column 15', visible: true, 'pinned': false },
      { 'name': 'Column 16', visible: true, 'pinned': false },
      { 'name': 'Column 17', visible: true, 'pinned': false }
    ]
  },
  { name: 'Group 3',
    visible: true,
    pinned: false,
    items: [
      { 'name': 'Column 11', visible: true, 'pinned': false },
      { 'name': 'Column 12', visible: true, 'pinned': false },
      { 'name': 'Column 13', visible: true, 'pinned': false },
      { 'name': 'Column 14', visible: true, 'pinned': false },
      { 'name': 'Column 15', visible: true, 'pinned': false },
      { 'name': 'Column 16', visible: true, 'pinned': false },
      { 'name': 'Column 17', visible: true, 'pinned': false }
    ]
  },
  { name: 'Group 4',
    visible: true,
    pinned: false,
    items: [
      { 'name': 'Column 11', visible: true, 'pinned': false },
      { 'name': 'Column 12', visible: true, 'pinned': false },
      { 'name': 'Column 13', visible: true, 'pinned': false },
      { 'name': 'Column 14', visible: true, 'pinned': false },
      { 'name': 'Column 15', visible: true, 'pinned': false },
      { 'name': 'Column 16', visible: true, 'pinned': false },
      { 'name': 'Column 17', visible: true, 'pinned': false }
    ]
  },
  { name: 'Group 5',
    visible: true,
    pinned: false,
    items: [
      { 'name': 'Column 11', visible: true, 'pinned': false },
      { 'name': 'Column 12', visible: true, 'pinned': false },
      { 'name': 'Column 13', visible: true, 'pinned': false },
      { 'name': 'Column 14', visible: true, 'pinned': false },
      { 'name': 'Column 15', visible: true, 'pinned': false },
      { 'name': 'Column 16', visible: true, 'pinned': false },
      { 'name': 'Column 17', visible: true, 'pinned': false }
    ]
  }
]
export default {
  name: 'draggable-boxes',
  data () {
    return {
      groups: dataSet
    }
  },
  methods: {
    logme () {
      console.log(this.groups)
    }
  },
  components: {
    DragDrop
  }
}
</script>
<style lang="stylus">
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

  .drag-item
    position relative
    padding 10px
    font-size 20px
    font-weight bold
    background-color #03a9f4
    border-radius 10px
    display inline-flex
    flex-direction column
    align-items center
    color white
    cursor move
    margin 10px
    transition all .3s
    span
      color black
      font-weight normal
      font-size 12px
    &.over
      transform scale(.9)
      opacity .8
    .drag-item
      border-radius 10px
      flex-grow 1
      &.over
        .content
          transform scale(.9)
          opacity .8

  .list-move
    transition transform .5s
</style>
