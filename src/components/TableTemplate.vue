<template>
   <div class="tbl_wrapper">
     <div class="table">
       <div class="header">
         <div class="header_row">
           <div class="column" v-for="col in 10" :key="col"><p>Колонка {{col}}</p></div>
         </div>
       </div>
       <div class="rows">
         <div class="row" v-for="row in 30" :key="row">
           <div class="column" v-for="col in 10" :key="col"><p>Содержимое колонки {{col}}</p></div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'table-template',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/components/TableTemplate'
</style>
