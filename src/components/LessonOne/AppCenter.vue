<template>
<div class="message-container" ref="messageContainer">
  <div :class="message.side" v-for="(message, i) in messages" :key="i" class="wrapperP">
    <p :class="{active: message.changed}">
      <span :style="{'color': message.colorname}">{{message.username}}</span>:{{message.text}}<br><span v-if="message.changed" class="edited">edited</span>
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
//background-color rgb(14, 22, 33)
<style scoped="true" lang="stylus">
  .edited
    color red
    font-style italic
    text-align right
    float right
  .wrapperP
    display flex
  p
    line-height 1
    margin 3px
    padding: 10px
    border: 4px outset
    border-radius: 10px
    background-color #E2FFC7
  &.active
    background-color #dfdbdd
</style>
<style lang="stylus">
  .message-container
    background-color rgb(14, 22, 33)
    border-radius 20px
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
