<template>
  <div class="iconBoxx">
    <div class="iconHome">iconHome</div>
    <div class="icons">
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
      <div class="icon">icon</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconbox',
  data () {
    return {}
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
