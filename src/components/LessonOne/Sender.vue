<template>
  <div class="sender">
    <input placeholder="Введите Логин" maxlength="9" v-model.lazy="login" v-if = "!login">
    <button v-if = "!login">Применить</button>
    <input name="inputleft" placeholder="Введите текст" maxlength="20" v-model="text" @change="sendmessage()" v-if = "login">
    <button @click="sendmessage()" class="Send" v-if = "login">Send</button>
    <input type="color" v-model="coloruser" @change="Logme()" ref="reftest" v-if = "login"/>
    <p ref="username" v-if = "login">{{login}}</p>
  </div>
</template>

<script>
export default {
  name: 'app-left',
  props: ['propsside'],
  data () {
    return {
      text: '',
      coloruser: '#00ff00',
      login: ''
    }
  },
  methods: {
    sendmessage () {
      if (this.text === '' || this.login === '') {
        return
      }
      this.$emit('pushmessage', this.text, this.propsside, this.login, this.coloruser)
      this.text = ''
    },
    Logme () {
      this.$refs.username.style.color = this.coloruser
    }
  }
}
</script>
<style lang="stylus">
  .sender
    width:33%
    border 1px solid #42b983
    border-radius 15px
    margin 15px0
    height 100%
</style>
