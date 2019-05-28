<template>
  <div class="sender">
    <input class="username_input" placeholder="Введите Логин" maxlength="9" v-model.lazy="login" v-if = "!login">
    <button v-if = "!login">Применить</button>
    <p ref="username" v-if = "login">{{login}} </p>
    <input class="message_input" autofocus placeholder="Введите текст" v-model="text" @change="sendmessage($event.target)" v-if = "login" v-on:keyup.up = "showlastmessages">
    <button class="send" @click="sendmessage()" v-if = "login">Send</button>
    <input class="color" type="color" v-model="coloruser" @change="Logme()" ref="reftest" v-if = "login"/>
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
    sendmessage (target) {
      // В функцию передал указатель на элемент, из которого была вызвана функция, задал ему принудительно
      // установку курсора в него же с помощью target.focus(), иначе сбивалось каждый раз
     // target.focus()
      if (this.text === '' || this.login === '') {
        return
      }
      this.$emit('pushmessage', this.text, this.propsside, this.login, this.coloruser)
      this.text = ''
    },
    Logme () {
      this.$refs.username.style.color = this.coloruser
    },
    showlastmessages () {
      this.$emit('getLastMessage')
    }
  }
}
</script>
<style lang="stylus">
  .sender
    display flex
    padding 15px
    flex-shrink 0
  .message_input, .username_input
    flex-grow 1
    margin-left 5px
  .color
    height calc(100% + 8px)
    width 20px
    background-color white
    padding 0
    margin -4px 0px -4px 0px
    border none
</style>
