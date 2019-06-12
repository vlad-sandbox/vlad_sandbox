<template>
  <div class="testwrapflex">
    <div class="wrapperbody">
    <div class="centerflex">
      <div class="week">
        <div class="nameday"><p>M</p></div>
        <div class="nameday"><p>T</p></div>
        <div class="nameday"><p>W</p></div>
        <div class="nameday"><p>T</p></div>
        <div class="nameday"><p>F</p></div>
        <div class="nameday"><p>S</p></div>
        <div class="nameday"><p>S</p></div>
      </div>
      <div class="week">
        <div class="day"><p>1</p></div>
        <div class="day"><p>2</p></div>
        <div class="day"><p>3</p></div>
        <div class="day"><p>4</p></div>
        <div class="day"><p>5</p></div>
        <div class="day"><p>6</p></div>
        <div class="day">
          <img src=@/assets/pictures/1.jpg class="img">
          <p>7</p>
        </div>
      </div>
      <div class="week">
        <div class="day"><p>8</p></div>
        <div class="day"><p>9</p></div>
        <div class="day"><p>10</p></div>
        <div class="day"><p>11</p></div>
        <div class="day"><p>12</p></div>
        <div class="day"><p>13</p></div>
         <div class="day">
           <img src=@/assets/pictures/1.jpg class="img">
           <p>14</p>
         </div>
      </div>
      <div class="week">
        <div class="day"><p>15</p></div>
        <div class="day"><p>16</p></div>
        <div class="day"><p>17</p></div>
        <div class="day"><p>18</p></div>
        <div class="day"><p>19</p></div>
        <div class="day"><p>20</p></div>
         <div class="day"><img src=@/assets/pictures/1.jpg class="img"></div>
      </div>
      <div class="week">
        <div class="day"><p>22</p></div>
        <div class="day"><p>23</p></div>
        <div class="day"><p>24</p></div>
        <div class="day"><p>25</p></div>
        <div class="day"><p>26</p></div>
        <div class="day"><p>27</p></div>
         <div class="day"><img src=@/assets/pictures/1.jpg class="img"></div>
      </div>
    </div>
    </div>
    <div class="footerflex">footer</div>
  </div>
</template>
<script>
</script>
<style scoped="true" lang="stylus">
  .testwrapflex
    display flex
    flex-direction column
    height 100%
  .wrapperbody
    display flex
    flex-direction row
    justify-content center
    height 100%
  .centerflex
    display flex
    flex-direction column
  .footerflex
    background-color green
//Блоки с неделями
  .week
    display flex
    flex-direction row
    flex-wrap wrap
    background-color white
// Блоки с днями
  .day
    width 100px
    height 100px
    border 1px solid
  .nameday
    width 100px
    height 35px
    border 1px solid
  p
    color green
    position absolute
  .img
    opacity 0.5
    width 100px
    height 100px
</style>
