<template>
  <div class="iconBoxx">
    <div class="iconHome">
      <img :src="require('../../../assets/pictures/' + imageName)"/>
      <!-- <img src="../../../assets/pictures/searchicon.png"/> -->
    </div>
    <div class="icons">
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
      <md-icon class="icon">icon</md-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconbox',
  data () {
    return {
      imageName: 'searchicon.png'
    }
  },
  watch: {},
  methods: {},
  components: {}
}
</script>
<style scoped lang="stylus">
.iconBoxx
  display flex
  flex-direction row
.iconHome
  color green
.icons
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center 
  background-color blue
  height 100px
  width 250
.icon
  flex 0 0 32%
  background-color red
</style>
