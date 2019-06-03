<template>
<div class="wrap">
    <div class="clear">
        <button class="blackthembutton" @click="blackthemfunc()">black</button>
    </div>
    <div class="center">
        <app-center :messages = "message"></app-center>
        <app-sender @pushmessage="getmessage" propsside="left-side" @getLastMessage="lastmessagestext ()" :lastmesaga="lastmessage"></app-sender>
        <!--<app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>-->
    </div>
    <div class="clear">
        <button class="whitethembutton" @click="whitethemfunc()">white</button>
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
      message: [],
      lastmessage: '',
      blackthemflag: false,
      whitethemflag: false
    }
  },
  methods: {
    getmessage (value, sideValue, loginuser, coloruser, editmode) {
      let obj = {
        text: value,
        side: sideValue,
        username: loginuser,
        colorname: coloruser,
        changed: editmode
      }
      if (editmode === true) {
        this.message.pop()
      }
      this.message.push(obj)
    },
    lastmessagestext () {
      let last = this.message.length - 1
      this.lastmessage = this.message[last].text
    },
    blackthemfunc () {
      this.blackthemflag = true
      this.$emit('setblacktheme', this.blackthemflag)
    },
    whitethemfunc () {
      this.whitethemflag = true
      this.$emit('setwhitetheme', this.whitethemflag)
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
    flex: 1;
    padding: 10px;
    overflow: hidden;
  }
  .center {
    background: white;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 3;
  }
  .clear {
    flex-grow: 1;
  }
</style>
