<template>
  <div class="left">
    <input name="inputleft" placeholder="Введите текст" maxlength="20" v-model="text" @change="sendmessage()">
    <button @click="sendmessage()" class="Send">Send</button>
  </div>
</template>

<script>
export default {
  name: 'app-left',
  props: ['propsside'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    sendmessage () {
      if (this.text === '') {
        return
      }
      this.$emit('pushmessage', this.text, this.propsside)
      this.text = ''
    }
  }
}
</script>
<style lang="stylus">
  .left
    width:33%
    border 1px solid #42b983
    border-radius 15px
    margin 15px0
    height 100%
</style>
