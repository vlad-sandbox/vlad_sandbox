<template>
<div class="right">
    <input placeholder="Введите текст" v-model="text" @change="sendmessage()">
    <button @click="sendmessage()" class="Send">Send</button>
</div>
</template>
<script>
export default {
  name: 'AppRight',
  data () {
    return {
      text: '',
      side: 'right-side'
    }
  },
  methods: {
    sendmessage () {
      if (this.text === '') {
        return
      }
      this.$emit('pushmessage', this.text, this.side)
      this.text = ''
    }
  }
}
</script>
<style lang="stylus">
  .right
    width:33%
    border 1px solid #42b983
    border-radius 15px
    margin 15px
    height 100%
</style>
