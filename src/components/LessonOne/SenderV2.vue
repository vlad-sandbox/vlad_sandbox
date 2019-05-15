<template>
  <div class="sender2">
  <!-- transition для анимированного перехода v-if/v-else -->
  <transition name="fade" mode="out-in" appear>
    <!-- Форма ввода username -->
    <div v-if="!login" key="login">
      <input placeholder="Введите имя" type="text" maxlength="15" v-model.lazy="login">
      <button>Применить</button>
    </div>
    <!-- Форма отправки сообщений -->
    <div v-else key="send" class="flex-column">
      <label ref="username" v-if = "login">
        <h3>{{login}}</h3>
        <input type="color" v-model="coloruser" @change="changeColor()" hidden v-if="canPickColor">
      </label>
      <div class="flex-row">
        <textarea placeholder="Введите сообщение" autofocus rows="1" v-model="text" @keyup.enter.exact="sendmessage()"/>
        <emoji width="1" height="1" class="emoji"/>
        <div class="send" title="Отправить" @click="sendmessage()">✉</div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import Emoji from 'emoji-vue'
export default {
  name: 'app-left',
  props: ['side'],
  data () {
    return {
      text: '',
      coloruser: '#000000',
      login: ''
    }
  },
  methods: {
    sendmessage () {
      if (this.text === '' || this.login === '') {
        return
      }
      this.$emit('pushmessage', this.text, this.side, this.login, this.coloruser)
      this.text = ''
    },
    changeColor () {
      this.$refs.username.style.color = this.coloruser
    }
  },
  computed: {
    canPickColor () {
      return this.coloruser === '#000000'
    }
  },
  components: {
    Emoji
  }
}
</script>
<style lang="stylus" scoped>
  .sender2
    width:33%
    margin 15px
    height 100%
    position relative
    display flex
    padding-left 10px
  .flex-column
    display flex
    flex-grow 1
    flex-direction column
  .flex-row
    display flex
  .send
    font-size 40px
    cursor pointer
    margin-left -40px
    transition all .3s
    align-self flex-end
    z-index 10
    &:hover
      color #42b983
  .emoji
    position absolute
    right 90px
    bottom 40px
    width 0px
    height 0px
  input[type=text], button
    border none
    outline none
    font-size 16px
    padding 10px
    transition all .3s
  textarea
    border none
    outline none
    font-size 16px
    flex-grow 1
    resize none
    padding 13px
  button
    &:hover
      box-shadow inset 0px 0px 3px #42b983
      color #42b983
      cursor pointer

  .fade-enter-active
    transition all .3s
  .fade-leave-active
    transition all .3s
  .fade-enter, .fade-leave-to
    transform translateX(-100px)
    opacity 0
</style>
<style lang="stylus">
  .emoji-wysiwyg-editor
    border none
</style>
