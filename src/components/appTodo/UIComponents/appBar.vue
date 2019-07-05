<template>
  <div :class="['layout', position]">
    <div :class="['bar_layout', {'open': showBar}, position]" :style="[positionStyle, sizeStyle]">
      <span class="line first">
        <div class="transform_child">
          <md-button class="md-fab md-primary" @click.native="simpleEvent('create')">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </span>
      <span class="line second">
        <div class="transform_child">
          <md-button class="md-fab md-primary" @click.native="simpleEvent('edit')">
            <md-icon>edit</md-icon>
          </md-button>
        </div>
      </span>
      <span class="line third">
        <div class="transform_child">
          <md-button class="md-fab md-primary" @click.native="simpleEvent('search')">
            <md-icon>search</md-icon>
          </md-button>
        </div>
      </span>
    </div>
    <!-- Кнопка скрыть/показать меню -->
    <div :class="['menu', {'open': showBar}]" @click="showBar = !showBar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
const positions = {
  'bottom-right': {bottom: '-200px', right: '-200px'},
  'bottom-left': {bottom: '-200px', left: '-200px'},
  'top-right': {top: '-200px', right: '-200px'},
  'top-left': {top: '-200px', left: '-200px'}
}
export default {
  name: 'app_bar',
  props: {
    position: {
      type: String,
      default () {
        return 'bottom-right'
      }
    },
    radius: {
      type: Number,
      default () {
        return 400
      }
    }
  },
  data () {
    return {
      positionStyle: positions[this.position],
      showBar: false,
      sizeStyle: {}
    }
  },
  watch: {
    showBar (to, fr) {
      if (to && this.radius && this.radius < 550 && this.radius > 385) {
        this.sizeStyle = {width: this.radius + 'px', height: this.radius + 'px'}
      } else {
        this.sizeStyle = {}
      }
    }
  },
  methods: {
    simpleEvent (event) {
      this.$emit(event)
      this.$emit('close')
      this.showBar = false
    }
  }
}
</script>
<style scoped lang="stylus">
.layout
  z-index 4
  position absolute
  width 70px
  height 70px
  &.bottom-right, &.bottom-left
    bottom 10px
  &.bottom
    &-left
      left 10px
    &-right
      right 10px
  &.top-right, &.top-left
    top 10px
  &.top
    &-left
      left 10px
    &-right
      right 10px
  .menu
    position absolute
    border-radius 50%
    width 60px
    height 60px
    background #fece0d
    display flex 
    flex-direction column
    align-items center
    justify-content center
    cursor pointer
    box-shadow 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)
    transition box-shadow .2s
    span
      width 30px
      height 3px
      border-radius 1.5px
      background white
      margin 3px
      transform-origin center center
      transition transform .3s
    &.open
      box-shadow 0px 0px 0px rgba(0,0,0,.14)
      span
        position absolute
        margin 0
        &:nth-child(1)
          transform rotate(-135deg)
        &:nth-child(2)
          opacity 0
        &:nth-child(3)
          transform rotate(135deg)
.bar_layout
  position absolute
  background #FFCF0D
  border-radius 50%
  width 200px
  height 200px
  display flex
  flex-direction column
  align-items center
  opacity 0
  transition width .3s, height .3s, opacity .4s
  &.open
    width 400px
    height 400px
    opacity 1
  .line
    position absolute
    height 45%
    top 5%
  &.bottom-right
    .line
      transform-origin bottom
      &.first
        transform rotate(-15deg)
        .transform_child
          transform rotate(15deg)
      &.second
        transform rotate(-45deg)
        .transform_child
          transform rotate(45deg)
      &.third
        transform rotate(-75deg)
        .transform_child
          transform rotate(75deg)
  &.bottom-left
    .line
      transform-origin bottom
      &.first
        transform rotate(15deg)
        .transform_child
          transform rotate(-15deg)
      &.second
        transform rotate(45deg)
        .transform_child
          transform rotate(-45deg)
      &.third
        transform rotate(75deg)
        .transform_child
          transform rotate(-75deg)
  &.top-left
    .line
      transform-origin bottom
      &.first
        transform rotate(165deg)
        .transform_child
          transform rotate(-165deg)
      &.second
        transform rotate(135deg)
        .transform_child
          transform rotate(-135deg)
      &.third
        transform rotate(105deg)
        .transform_child
          transform rotate(-105deg)
  &.top-right
    .line
      transform-origin bottom
      &.first
        transform rotate(-165deg)
        .transform_child
          transform rotate(165deg)
      &.second
        transform rotate(-135deg)
        .transform_child
          transform rotate(135deg)
      &.third
        transform rotate(-105deg)
        .transform_child
          transform rotate(105deg)
    
</style>
