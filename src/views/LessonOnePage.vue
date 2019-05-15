<template>
<div class="chat">
  <app-sender2 @pushmessage="getmessage" side="left-side"></app-sender2>
  <app-center :messages = "message"></app-center>
  <app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>
</div>
</template>

<script>
import AppSender from '@/components/LessonOne/Sender.vue'
import AppSender2 from '@/components/LessonOne/SenderV2.vue'
import AppCenter from '@/components/LessonOne/AppCenter.vue'
export default {
  name: 'lesson-one',
  data () {
    return {
      message: []
    }
  },
  methods: {
    getmessage (value, sideValue, loginuser, coloruser) {
      let obj = {
        text: value,
        side: sideValue,
        username: loginuser,
        colorname: coloruser
      }
      this.message.push(obj)
    }
  },
  components: {
    AppSender,
    AppCenter,
    AppSender2
  }
}
</script>
<style scoped>
  .chat {
    display:flex;
    justify-content: space-between;
  }
</style>
