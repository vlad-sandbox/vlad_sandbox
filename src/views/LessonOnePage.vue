<template>
<div class="wrap">
    <div class="clear">
        <ul>Привет</ul>
    </div>
    <div class="content">
        <app-center :messages = "message"></app-center>
        <app-sender @pushmessage="getmessage" propsside="left-side"></app-sender>
        <!--<app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>-->
    </div>    
    <div class="clear">
        <ul>Привет</ul>
    </div>
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
    AppCenter
  }
}
</script>
<style>
  .wrap {
     display: flex;
  }
    .content {
        background: white;
        flex-grow: 1;
        flex-shrink: 1;
        height: 100%;
    }
    .clear {
        width: 500px;
        flex-shrink: 2;
        height: 100%;
    }
  .sender {
    flex-grow: 1;
    flex-shrink: 2;
  }
  .center {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: scroll;
  }
</style>
