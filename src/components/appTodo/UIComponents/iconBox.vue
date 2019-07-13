<template>
  <div class="iconBoxx">
    <div class="iconHome" @click="OpenCloseIcons">
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
    </div>
    <div class="icons" v-if = flagicons>
      <img @click="rename" class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
      <img class="icon" :src="require('@/assets/pictures/' + imageName)"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconbox',
  data () {
    return {
      imageName: 'searchicon.png',
      flagicons: false
    }
  },
  watch: {},
  methods: {
    OpenCloseIcons () {
      this.flagicons = !this.flagicons
    },
    rename () {
      let kitty = 'pussy'
      console.log(kitty)
    }
  },
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
  background-color blue
  height 100px
  width 100%
.icon
  width 33%
  max-height 30px
</style>
