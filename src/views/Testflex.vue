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
        <div class="day"><p>21</p></div>
      </div>
      <div class="week">
        <div class="day"><p>22</p></div>
        <div class="day"><p>23</p></div>
        <div class="day"><p>24</p></div>
        <div class="day"><p>25</p></div>
        <div class="day"><p>26</p></div>
        <div class="day"><p>27</p></div>
        <div class="day"><p>28</p></div>
      </div>
    </div>
      <div class="alter_calendar">
        <div class="a_header">
          <!-- Делаю цикл по строке MTWTFSS как по массиву, побуквенно пробегаю по нему -->
          <!-- i использую только лишь чтобы задать уникальный key каждому div (чтобы ошибка не горела) -->
          <div class="a_day" v-for="(day, i) in 'MTWTFSS'" :key="i">{{day}}</div>
        </div>
        <div class="a_weeks">
          <div class="a_week" v-for="week in 5" :key="week">
            <div class="a_day" v-for="date in 7" :key="date">
              <span v-if="(date + (week - 1) * 7) < 32">{{date + (week - 1) * 7}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerflex">footer</div>
  </div>
</template>
<script>
</script>
<style scoped="true" lang="stylus">
  // Стили для альтернативного календаря
  .alter_calendar
    flex-direction column
  .alter_calendar, .a_header, .a_week
    cursor default
    display flex
    .a_day
      flex-grow 1
      flex-basis 0
      &:nth-child(7)
        color red
  // Прочие красивости
  .a_week
    .a_day
      padding 5px
      margin 5px
      border-radius 50%
      &:hover
        padding 10px
        margin 0px
        background-color #eab558
        cursor pointer
        transition all .5s

  .testwrapflex
    display flex
    flex-direction column
    height 100%
  .wrapperbody
    display flex
    flex-direction row
    justify-content space-around
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
    // Дописал свойства для выравнивания цифр внутри дня
    display flex
    align-items center
    justify-content center
    // Каждому седьмому по счету дню недели дополнительно задается фоновое изображение
    &:nth-child(7)
      background-image url('../assets/pictures/1.jpg')
      background-size contain
  .nameday
    width 100px
    height 35px
    border 1px solid
    // Дописал свойства для выравнивания букв внутри дня
    display flex
    align-items center
    justify-content center
  p
    color green
    margin 0
    font-size 25px
    // Убрал абсолютное позиционирование, в нем нет необходимости
    // position absolute
  // Соотв-но это тоже не актуально
  .img
    opacity 0.5
    width 100px
    height 100px
</style>
