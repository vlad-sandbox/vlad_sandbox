<template>
<div class="content">
  <app-sender @pushmessage="getmessage" propsside="left-side"></app-sender>
  <app-center :messages = "message"></app-center>
  <app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>
</div>
</template>

<script>
import AppSender from '@/components/LessonOne/Sender.vue'
import AppCenter from '@/components/LessonOne/AppCenter.vue'
export default {
  name: 'lesson-one',
  data () {
    return {
      message: []
    }
  },
  methods: {
    getmessage (value, sideValue) {
      let obj = {
        text: value,
        side: sideValue
      }
      this.message.push(obj)
    }
  },
  components: {
    AppSender,
    AppCenter
  }
}
</script>
<style>
  .content {
    display:flex;
    justify-content: space-between;
  }
</style>
