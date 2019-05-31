<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/flexbox">FlexBox</router-link> |
      <router-link to="/draggable">DraggableBox</router-link> |
      <router-link to="/base">Base</router-link> |
      <router-link to="/LessonOne">Lesson-1</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
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
