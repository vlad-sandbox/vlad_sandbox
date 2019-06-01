<template>
<div class="message-container" ref="messageContainer">
  <div :class="message.side" v-for="(message, i) in messages" :key="i" class="wrapperP">
    <p :class="{active: message.changed}">
      <span :style="{'color': message.colorname}">{{message.username}}</span>:{{message.text}}
    </p>
  </div>
</div>
</template>
<script>
export default {
  name: 'AppCenter',
  props: ['messages'],
  data () {
    return {
    }
  },
  watch: {
    // watcher - такая штука, которая следит за изменением переменной и вызывает функцию
    // при каждом изменении переменной
    // Вот пришел новый элемент в messages - переменная изменилась, сработал вызов функции
    messages (to, fr) {
      // el = переменная в которой хранится ссылка на элемент "контейнер для сообщений"
      let el = this.$refs.messageContainer
      // При изменении массива я программно прокручиваю "контейнер для сообщений" в самый конец
      // Чтобы были видны новые сообщения сразу, а не пришлось прокручивать пользователю
      // На формат записи не смотри, я потом покажу тебе сокращенные стрелочные функции
      setTimeout(_ => { el.scrollTop = el.scrollHeight }, 50)
    }
  }
}
</script>
<style scoped="true" lang="stylus">
  .wrapperP
    display flex
  p
    line-height 1
    margin 3px
    padding: 10px
    border: 4px outset
    border-radius: 10px
    background-color c9ffd5
  &.active
    background-color #dfdbdd
</style>
<style lang="stylus">
  .message-container
    display flex
    flex-direction column
    flex-grow 1
    padding 10px
    overflow-y auto
    scroll-behavior smooth
  .left-side
    float left
    width 100%
    text-align left
  .right-side
    float right
    width 100%
    text-align right
</style>
