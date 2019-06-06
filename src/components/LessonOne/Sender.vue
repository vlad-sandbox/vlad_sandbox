<template>
  <div class="sender">
      <!--Поле ввода логина-->
    <input class="username_input" placeholder="Введите Логин" maxlength="9" v-model.lazy="login" v-if = "!login">
      <!--Кнопка применения логина-->
    <button v-if = "!login">Применить</button>
      <!--Вывод логина-->
    <p ref="username" v-if = "login">{{login}} </p>
      <!--Поле ввода сообщения-->
    <input class="message_input" autofocus placeholder="Введите текст" v-model="text" @change="sendmessage($event.target)" v-if = "login" @keyup.up = "showlastmessages()" wrap="soft">
      <!--Кнопка отправки сообщения-->
    <button class="send" @click="sendmessage()" v-if = "login">Send</button>
      <!--Поле выбора цвета логина-->
    <input class="color" type="color" v-model="coloruser" @change="Logme()" ref="reftest" v-if = "login"/>
  </div>
</template>

<script>
export default {
  name: 'app-left',
  props: ['propsside', 'lastmesaga'],
  data () {
    return {
      text: '',
      coloruser: '#00ff00',
      login: '',
      editmode: false
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
      this.$emit('pushmessage', this.text, this.propsside, this.login, this.coloruser, this.editmode)
      this.text = ''
      this.editmode = false
    },
    Logme () {
      this.$refs.username.style.color = this.coloruser
    },
    showlastmessages () {
      this.$emit('getLastMessage')
      setTimeout(() => { this.text = this.lastmesaga }, 100)
      this.editmode = true
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
