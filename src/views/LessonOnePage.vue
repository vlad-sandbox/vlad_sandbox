<template>
<div class="wrap">
    <div class="clear">
        <div class="buttonmenu">
          <div class="buttonmenustick"></div>
          <div class="buttonmenustick"></div>
          <div class="buttonmenustick"></div>
        </div>
    </div>
    <div class="center">
        <app-center :messages = "message"></app-center>
        <app-sender @pushmessage="getmessage" propsside="left-side" @getLastMessage="lastmessagestext ()" :lastmesaga="lastmessage"></app-sender>
        <!--<app-sender @pushmessage="getmessage" propsside="right-side"></app-sender>-->
    </div>
    <div class="clear">
      <div class="buttonthemoff" :class="{'buttonthemon': colorflag}">
          <div class="buttonstickoff" @click="allcolorfunc()" :class="{'buttonstickon': colorflag}">
          </div>
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

<style lang="stylus">
  .wrap
    display flex
    flex 1
    padding 10px
    overflow hidden
  .center
    background-color rgb(45, 120, 176)
    max-width: 800px
    display flex
    flex-direction column
    justify-content space-between
    flex-grow 3
    border-radius 22px
  .clear
    flex-grow 1
  .buttonthemoff
    width 36px
    height 14px
    border-radius 15px
    float left
    background-color rgba(0, 0, 0, 0.38)
    margin-right 5px
  .buttonstickoff
    width 20px
    height 20px
    float right
    border-radius 20px
    margin-top -3px
    margin-right -2px
    background-color rgb(59, 68, 81)
    transition: all .9s
  .buttonthemon
    width 36px
    height 14px
    border-radius 15px
    float left
    background-color aqua
    margin-right 5px
  .buttonstickon
    width 20px
    height 20px
    border 1px solid
    border-color rgb(39, 104, 153)
    border-radius 20px
    margin-top -5px
    margin-right 18px
    background-color rgb(23, 33, 43)
    transition all .9s
  .buttonmenustick
     height 5px
     width 30px
     border-radius 20px
     margin-bottom 1px
     background-color rgba(0, 0, 0, 0.38)
  .buttonmenu
    width 30px
    float right
    &:hover
      .buttonmenustick
       background-color rgba(0, 0, 0, 0.58)
       color white
     &:active
      .buttonmenustick
       box-shadow 0 0 15px rgba(0,0,0,0.7)
       transition all .2s
</style>
