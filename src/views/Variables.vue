<template>
  <div class="wrap">
    {{variable}}
    <button @click="doAny()">Do</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      variable: 'привет, как дела',
      v1: false,
      arr: [],
      obj: {
        s1: 'lokek',
        s2: 'cheby'
      },
      f () {
      },
      int: 22
    }
  },
  methods: {
    doAny () {
      // Разделяем строку, переворачиваем массив, объединяем в строку
      // let sp = this.variable.split('').reverse().join('')
      /* this.obj = {
        value: true,
        switch () {
          this.value = !this.value
          setTimeout(() => { this.value = !this.value }, 1000)
        }
      } */
      /* let atata = false
      setTimeout(() => {
        atata = !atata
      }, 1000)
      */
      // console.log(this.obj.switch())
    }
  },
  components: {
  }
}
</script>
<style lang="stylus">
  .wrap
    display block
</style>
