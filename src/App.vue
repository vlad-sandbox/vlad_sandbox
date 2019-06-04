<template>
  <div id="app" :class="[{'blackthemapp': blackflag}, {'whitethemapp': whiteflag} ]">
    <!-- <div :class="['wrapper', {'grey': greyFlag}, {'green': greenFlag}]"> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/flexbox">FlexBox</router-link> |
      <router-link to="/draggable">DraggableBox</router-link> |
      <router-link to="/base">Base</router-link> |
      <router-link to="/LessonOne">VL Chat</router-link> | 
      <router-link to="/Variables">Variables</router-link>
    </div>
    <router-view @setblacktheme="appendblackthem" @setwhitetheme="appendwhitethem"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      blackflag: false,
      whiteflag: false
    }
  },
  methods: {
    appendblackthem (blackthemflag) {
      this.blackflag = blackthemflag
      this.whiteflag = false
    },
    appendwhitethem (whitethemflag) {
      this.whiteflag = whitethemflag
      this.blackflag = false
    }
  }
}
</script>
<style lang="stylus">
.blackthemapp
  background-color black
  transition all .5s
  //transform: scale(0.1,0.2)
.whitethemapp
  background-color white
  transition all .5s
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
</style>
