<template>
  <div class="iconBoxx">
    <div class="iconHome" @click="OpenCloseIcons">
      <img class="icon" :src="require('@/assets/icons/' + icon + '.png')"/>
    </div>
    <div class="icons" v-if = flagicons>
      <img :key="i" v-for="i in 40" @click="rename(i)" class="icon" :src="require('@/assets/icons/' + i + '.png')"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconbox',
  data () {
    return {
      icon: 1,
      flagicons: false,
      iconprod: '1.png'
    }
  },
  watch: {},
  methods: {
    OpenCloseIcons () {
      this.flagicons = !this.flagicons
    },
    rename (i) {
      this.icon = i
      this.flagicons = !this.flagicons
      this.iconprod = this.icon + '.png'
      this.$emit('iconpush', this.iconprod)
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
  justify-content space-evenly
  height 100px
  width 70%
  overflow-y scroll
.icon
  width 50px
  height 50px
  margin 3%
</style>
