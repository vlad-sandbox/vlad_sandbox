<template>
<div class="screen_wrapper">
    <md-button class="md-fab md-primary md-fab-bottom-right" @click.native="toggleCreateTask()">
      <md-icon>add</md-icon>
    </md-button>
    <!--              Выезжающее меню с поиском               -->
    <div class="wrapperFullsearch" :class="{'wrapperFullsearchOpen': flagfullsearch}">
      Поиск
      <div class="inputsFullsearch">
        <button class="buttonFullsearch" @click="metodFullsearch" ><img src="../../assets/pictures/searchicon.png" draggable="false"/></button>
        <md-field>
    <label>Описание</label>
    <md-input></md-input>
  </md-field>
        <input class="inputFullsearch" placeholder="Введите текст">
        <input class="inputFullsearch" placeholder="Введите текст">
        <input class="inputFullsearch" placeholder="Введите текст">
        <div class="wrapperCoreInput">
          <div class="shell">
            <div class="core"></div>
          </div>
          <p class="textCoreInput">Открыта Закрыта</p>
          <div class="shell">
            <div class="core"></div>
          </div>
        </div>
        <input class="inputFullsearch" placeholder="Введите текст">
        <input class="inputFullsearch" placeholder="Введите текст">
      </div>
    </div>
    <button class="bottomsearch" @click="flagSerchBottom"><img src="../../assets/pictures/searchicon.png" draggable="false"/></button>
    <input class="inputsearch" v-if="flagSerch" @input="serchinput" v-model="serchtext">
    <app-task-list :data="data" @pushclose = "runclosetasks"></app-task-list>
    <md-dialog :md-active.sync="createNewTask">
      <md-dialog-title>Новая задача</md-dialog-title>
      <app-task-manager @create="pushTask"></app-task-manager>
    </md-dialog>
</div>

</template>

<script>
import appTaskList from './todoComponents/appTaskList'
import appTaskManager from './todoComponents/appTaskManager'
const dateNow = () => new Date()
const datePlan = () => {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  return date
}
const dataItems = [
  {
    'date': '2019.06.04',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание первой задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание второй задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      },
      {
        'name': 'Третья задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание третьей задачи',
        'visible': true,
        'tags': [],
        'fullmode': false
      }
    ]
  },
  {
    'date': '2019.06.05',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание первой задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание второй задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      }
    ]
  },
  {
    'date': '2019.06.06',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание первой задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание второй задачи',
        'tags': [],
        'fullmode': false,
        'visible': true
      }
    ]
  }
]
export default {
  name: 'todo',
  data () {
    return {
      data: dataItems,
      createNewTask: false,
      flagSerch: false,
      serchtext: '',
      flagfullsearch: false
    }
  },
  created () {
    console.log('Данные из переменной this.data:', this.data)
    // Задали имя, под которым будем сохранять запись в localStorage
    let name = 'main_data'
    // Сохранили запись в localStorage
    this.lsSet(name, this.data)
    // В переменную oldData получили данные ИЗ localStorage и вывели ее в консоль
    let oldData = this.lsGet(name)
    console.log('Данные из локального хранилища:', oldData)
    // Удалила из localStorage запись, сохраненную под именем name
    this.lsRem(name)
    // Другие варианты:
    // this.lsSet('любое_другое_имя', this.любая_другая_переменная)
    // this.lsGet('любое_другое_имя')
    // this.lsRem('любое_другое_имя')
    //
    // Установка РЕАКТИВНОЙ зависимости для переменной
    // this.$set(this, 'имя глобальной переменной', this.lsGet(name))
  },
  methods: {
    pushTask (newTask) {
      let dateNow = new Date().toISOString().split('T')[0].replace(/-/g, '.')
      if (dateNow !== this.data[this.data.length - 1].date) {
        let datetasksNew = {
          date: dateNow,
          tasks: [newTask]
        }
        this.data.push(datetasksNew)
      } else {
        this.data[this.data.length - 1].tasks.push(newTask)
      }
      this.toggleCreateTask()
    },
    toggleCreateTask () {
      this.createNewTask = !this.createNewTask
    },
    // Метод ПОЛУЧЕНИЯ данных из локального хранилища.
    // Name - имя, под которым сохранены данные в localStorage
    lsGet (name) {
      return JSON.parse(localStorage.getItem(name))
    },
    // Метод ЗАПИСИ данных в локальное хранилище.
    // Name - имя, под которым БУДУТ сохранены данные в localStorage
    // Data - данные, которые будут созранены в localStorage
    lsSet (name, data) {
      return localStorage.setItem(name, JSON.stringify(data))
    },
    // Метод УДАЛЕНИЯ записи из локального хранилища.
    // Name - имя, под которым хранится удаляемая записи в localStorage
    lsRem (name) {
      return localStorage.removeItem(name)
    },
    runclosetasks (fullmode) {
      this.data.forEach(item => {
        item.tasks.forEach(items => {
          items.fullmode = false
        })
      })
    },
    flagSerchBottom () {
      this.flagSerch = !this.flagSerch
    },
    serchinput (serchtext) {
      this.data.forEach(item => {
        item.tasks.forEach(items => {
          items.visible = items.name.toLowerCase().startsWith(this.serchtext.toLowerCase())
        })
      })
    },
    metodFullsearch () {
      this.flagfullsearch = !this.flagfullsearch
    }
  },
  components: {
    appTaskList,
    appTaskManager
  }
}
</script>

<style lang="stylus" scoped>
.screen_wrapper
  height 100%
  overflow hidden
  position relative
  &:after
    content ''
    position absolute
    top 0
    left 0
    height 10px
    background linear-gradient(to bottom, #eaeaea, #eaeaea00)
    width 100%
  &:before
    content ''
    position absolute
    bottom 0
    left 0
    height 10px
    background linear-gradient(to top, #eaeaea, #eaeaea00)
    width 100%
.bottomsearch
  position absolute
  right 100px
  bottom 30px
  width 55px
  height 55px
  border-radius 50%
  background-color #448aff
  border 0px
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  &:hover
    cursor pointer
  &:active
    cursor pointer
    box-shadow: 0 15px 20px rgba(0,0,0,0.3);
    transition all .5s
.inputsearch
  position absolute
  right 50px
  top 23px
  width 300px
  height 40px
  border-radius 10px 0px 0px 10px
  border-left 5px solid #00bcd4
.wrapperFullsearch
  border solid 2px
  display flex
  flex-direction column
  position absolute
  left 100%
  width 250px
  min-height 300px
  transition all .5s
  top 20px
  border-right none
  border-radius 50px 0 0 50px
  border-color #448aff
.wrapperFullsearchOpen
  transition all .5s
  margin-left -250px
.inputsFullsearch
  flex-direction column
  display flex
  color green
  justify-content space-evenly
  flex-grow 1
  Align-items center
.inputFullsearch
  width 150px
  height 20px
  border none
  outline none
  border-bottom solid 1px red
  background-color rgba(0,0,0,0)
  &:hover
    border-bottom solid 1px blue
.buttonFullsearch
  position absolute
  left -32px
  width 30px
  height 70px
  border-radius 50px 0 0 50px
  outline none
  border none
  background-color #448aff
  &:active
    outline none
    box-shadow 0 0 10px rgba(0,0,0,0.5)
    transition all .3s
.wrapperCoreInput
  display flex
  flex-direction row
  justify-content space-around
  Align-items center
.shell
  display flex
  flex-direction column
  justify-content space-evenly
  Align-items center
  height 16px
  width 16px
  border solid 1px
  border-radius 50%
  &:hover
    background-color green
.core
  height 12px
  width 12px
  border solid 1px
  border-radius 50%
  background-color white
  &:active
    background-color red
.textCoreInput
  padding 0px 10px 0px 10px
  </style>
