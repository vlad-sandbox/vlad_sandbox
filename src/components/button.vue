<template>
   <div>
     <button @click="updateNumb()">{{text}}</button>
     <p>{{numberValue}}</p>
     <input v-model="msg"/>
     <p>{{msg}}</p>
   </div>
</template>

<script>
export default {
  name: 'app-button',
  props: ['text', 'numberValue'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    updateNumb () {
      let first = 1
      let second = 2
      this.$emit('buttonClicked', first, second)
    }
  }
}
</script>

<style scoped lang="css">
  button {
    width: 200px;
  }
</style>
