<template>
  <transition-group name="list" tag="div" class="content">
     <div v-for="(item, i) in items" :name="item.name" :key="item.name"
         draggable @dragover.prevent @dragleave.prevent
         :class="['drag-item', {'over': item.over}]"
         @dragstart.self="setDragStart($event, $event.target, {items, item, i, target})"
         @drop="setDrop($event, $event.target, {items, item, i, target})"
         @dragend="setDragEnd($event, $event.target, {items, item, i, target})"
         @dragenter="setDragEnter($event, $event.target, {items, item, i, target})">
         <span>{{item.visible ? 'Visible': 'Hidden'}}</span>
         <span>{{item.pinned ? 'Pinned': 'Unpinned'}}</span>
         {{item.name}}
         <drag-drop @moved="() => $emit('moved')" :data="item.items" :target="'child_' + item.name" v-if="item.items"/>
     </div>
 </transition-group>
</template>

<script>
export default {
  name: 'DragDrop',
  props: {
    data: Array,
    target: String
  },
  data () {
    return {
      items: this.data,
      transfer: {}
    }
  },
  methods: {
    setDragStart (e, t, data) {
      t.style.opacity = '.5'
      this.transfer = data
      this.clearOver()
    },
    setDragEnd (e, t, data) {
      t.style.opacity = '1'
      this.transfer = {}
      this.$emit('moved')
      this.clearOver()
    },
    setDrop (e, t, data) {
      if (data.target !== this.transfer.target) {
        return e.preventDefault()
      }
      this.paste(this.transfer.items, this.transfer.i, data.i, this.transfer.item)
      t.classList.remove('over')
    },
    setDragEnter (e, t, data) {
      if (data.target !== this.transfer.target) {
        return e.stopPropagation()
      }
      this.clearOver()
      this.items[data.i].over = true
    },
    clearOver () {
      this.items.forEach(item => this.$set(item, 'over', false))
    },
    paste (array, inFrom, inTo, data) {
      array.splice(inFrom, 1)
      array.splice(inTo, 0, data)
    }
  },
  components: {
    DragDrop: () => import('@/libs/DragDrop.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .list-move
    transition transform .5s
</style>
