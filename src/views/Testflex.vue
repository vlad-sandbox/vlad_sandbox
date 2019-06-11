<template>
  <div class="testwrapflex">
    <div class="bodyflex">
      <div class="clearflex">clear</div>
      <div class="centerflex">
        <div class="wrapmondey"><p>mondey</p></div>
        <div class="wraptuesday"><p>tuesday</p></div>
        <div class="wrapwednesday"><p>wednesday</p></div>
        <div class="wrapthursday"><p>thursday</p></div>
        <div class="wrapfriday"><p>friday</p></div>
        <div class="wrapsaturday"><p>saturday</p></div>
        <div class="wrapsunday"><p>sunday</p></div>
      </div>
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
    flex-wrap wrap
    justify-content space-evenly
  .clearflex
    background-color red
    flex-grow 1
  .centerflex
    display flex
    background-color blue
    flex-grow 1.5
    flex-wrap wrap
    justify-content space-evenly
  .footerflex
    background-color green
    flex-grow 1
  .wrapmondey
    background-color yellow
    flex-grow 1
  .wraptuesday
    background-color pink
    flex-grow 1
  .wrapwednesday
    background-color brown
    flex-grow 1
  .wrapthursday
    background-color black
    flex-grow 1
  .wrapfriday
    background-color white
    flex-grow 1
  .wrapsaturday
    background-color orange
    flex-grow 1
  .wrapsunday
    background-color grey
    flex-grow 1
  p
    color green
    float right
    margin-top 0px
    margin-right 2px
</style>
