<template>
  <div class="home">
    <h1>Base Sandbox</h1>
    <app-button :text='buttonText' :numberValue='numb' @buttonClicked="updateNumber"> </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/button.vue'

export default {
  name: 'base',
  data () {
    return {
      numb: 1,
      a: 5,
      b: 31,
      buttonText: 'Push Me',
      arr: ['first', 'second', 3, 4, 5],
      objkek: {
        name: 'classic Object',
        value: 33
      }
    }
  },
  methods: {
    updateNumber (val1, val2) {
      this.numb = this.numb + val1
    },
    checkUser () {
      console.log('Check User')
    }
  },

  created () {
    this.checkUser()
    // Доступны methods и data
  },
  mounted () {
    // Доступен элемент this.$el (шаблон)
  },
  updated () {
    // При любом обновлении реактивного свойства
  },
  beforeDestroy () {
    // Перед смертью компонента
  },

  computed: {
    summAB () {
      return this.a + this.b
    }
  },

  components: {
    AppButton
  }
}
</script>

<style scoped lang="stylus">

</style>
