<template>
  <div class="testwrapflex">
    <div class="bodyflex">
      <div class="clearflex">clear</div>
      <div class="centerflex">center</div>
      <div class="clearflex">clear</div>
    </div>
    <div class="footerflex">footer</div>
  </div>
</template>
<script>
</script>
<style scoped="true" lang="stylus">
  .bodyflex
    display flex
    height 100px
  .clearflex
    background-color red
  .centerflex
    background-color blue
  .footerflex
    background-color green
</style>
