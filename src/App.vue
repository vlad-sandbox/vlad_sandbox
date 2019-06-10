<template>
 <!-- <div id="app" :class="[{'blackthemapp': blackflag}, {'whitethemapp': whiteflag}]"> -->
<div id="app" :class="{'colorchangeapp': usingcolorflag}">
    <!-- <div :class="['wrapper', {'grey': greyFlag}, {'green': greenFlag}]"> -->
    <div id="nav" :class="{'colorchangenav': usingcolorflag}">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/flexbox">FlexBox</router-link> |
      <router-link to="/draggable">DraggableBox</router-link> |
      <router-link to="/base">Base</router-link> |
      <router-link to="/LessonOne">VL Chat</router-link> |
      <router-link to="/Variables">Variables</router-link> |
      <router-link to="/Todo">ToDo</router-link> |
      <router-link to="/Testflex">Testflex</router-link>
    </div>
    <router-view @colortheme = "appendcolortheme"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usingcolorflag: false
    }
  },
  methods: {
    appendcolortheme (colorflag) {
      this.usingcolorflag = colorflag
    }
  }
}
</script>
<style lang="stylus">
@font-face
    font-family: Roboto-light; /* Имя шрифта */
    src: url(/assets/fonts/Roboto-Light.TTF); /* Путь к файлу со шрифтом */
body
  margin 0
  padding 0
  width 100vw
  height 100vh
  background-color #eaeaea
  overflow hidden
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100%
  height 100%
  display flex
  flex-direction column
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.colorchangeapp
  background-color rgb(23, 33, 43)
  transition all .5s
  //transform: scale(0.1,0.2)
.colorchangenav
  padding 30px
  a
    font-weight normal
    font-family Roboto-light !important
    color white !important
    transition all .5s !important
    text-decoration none
  &.router-link-exact-active
    color white
</style>
