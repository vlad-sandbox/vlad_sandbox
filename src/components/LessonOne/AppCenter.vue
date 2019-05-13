<template>
<div class = "center">
  <p v-for = "message in messages" :class="message.side">{{message.text}}</p>
</div>
</template>
<script>
export default {
  name: 'AppCenter',
  props: ['messages'],
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
  .center
    width 33%
  .left-side
    float left
    width 100%
    text-align left
  .right-side
    float right
    width 100%
    text-align right
</style>
