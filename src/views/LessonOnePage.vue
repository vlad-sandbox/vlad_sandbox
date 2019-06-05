<template>
<div class="wrap">
    <div class="clear">
        <div class="buttonthem">
          <div class="buttonstick" @click="allcolorfunc()">
          </div>
        </div>
    </div>
    <div class="center">
        <app-center :messages = "message"></app-center>
        <app-sender @pushmessage="getmessage" propsside="left-side" @getLastMessage="lastmessagestext ()" :lastmesaga="lastmessage"></app-sender>
        <!--<app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>-->
    </div>
    <div class="clear">
      <!-- Switch -->
  <div class="switch">
    <label>
      Off
      <input type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>
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
      colorflag: false
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
    allcolorfunc () {
      if (this.colorflag === true) {
        this.colorflag = false
        this.$emit('colortheme', this.colorflag)
      } else {
        this.colorflag = true
        this.$emit('colortheme', this.colorflag)
      }
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
  .buttonthem {
    border: 4px outset;
    border-color:aquamarine;
    width: 30px;
    height: 30px;
  }
  .buttonstick {
    border: 4px outset;
    border-color:brown;
    width: 10px;
    height: 23px;
    float: right;
  }
</style>
