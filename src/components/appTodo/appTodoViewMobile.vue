<template>
<div class="screen_wrapper">
  <button @click="lessonObjperebor">test</button>
  <div class="phone_border_wrapper">
    <img class="phone" src="../../assets/pictures/pixel.png"/>
    <div class="content-wrapper">
      <!-- Функциональный бар -->
      <app-bar position="bottom-right" :radius="410" @create="toggleCreateTask" @edit="() => log('edit')" @search="toggleSearch"/>
      <!-- Поиск -->
      <label class="search" v-if="showSearch" >
        <input @input="serchinput" @change="toggleSearch()" v-model="serchtext" autofocus placeholder="Поиск">
        <md-icon>search</md-icon>
      </label>
      <!-- Блок со списоком задач -->
      <app-task-list :data="data" @pushclose = "runclosetasks"></app-task-list>
      <!-- Модал создания записи -->
      <md-dialog :md-active.sync="createNewTask">
        <md-dialog-title>Новая задача</md-dialog-title>
        <app-task-manager @create="pushTask"></app-task-manager>
      </md-dialog>
    </div>
  </div>
</div>

</template>

<script>
import appTaskList from './todoComponents/appTaskList'
import appTaskManager from './todoComponents/appTaskManager'
import appBar from './UIComponents/appBar'

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
      showSearch: false,
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
    // вывод в консоль
    log (value) {
      console.log(value)
    },
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
    // Смена флага для отображения поля поиска
    toggleSearch () {
      this.showSearch = !this.showSearch
    },
    // Перебираем массив, присваивая параметру visible true или false
    serchinput (serchtext) {
      console.log(this.serchtext)
      this.data.forEach(items => {
        items.tasks.forEach(item => {
          item.visible = item.name.toLowerCase().startsWith(this.serchtext.toLowerCase())
        })
      })
    },
    metodFullsearch () {
      this.flagfullsearch = !this.flagfullsearch
    },
    //  поиск введенного текста по всему массиву
    Fullsearch (serchtext) {
      this.data.forEach(items => {
        items.tasks.forEach(item => {
          let pussy = JSON.stringify(item).toLowerCase().indexOf(this.serchtext.toLowerCase())
          item.visible = JSON.stringify(item).toLowerCase().startsWith(this.serchtext.toLowerCase(), pussy)
        })
      })
    },
    //Из массива в объект
    lessonMassObj () {
      let obj = {id:{}}
      let mass = [
        {id: 426, name: 'petya'},
        {id: 839, name: 'vasya'}
      ]
      mass.forEach(items => {
        obj[items.id] = items
       // obj = {
       //   [items.id]: items
       // }
      })
     },
     //Из объекта в массив
     lessonObjperebor () {
       let obj = {
        id: 426,
        name: 'petya'
        }
        Object.keys(obj).forEach(key => {
          console.log(obj[key])
        })
        Object.keys(obj).map(key => obj[key]).forEach(item => {
          console.log(item)
        })
      }
  },
  components: {
    appTaskList,
    appTaskManager,
    appBar
  }
}
</script>
<style lang="stylus" scoped>
.screen_wrapper
  height 100%
  overflow hidden
  position relative
  display flex
  .phone_border_wrapper
    margin auto
    width 360px
    position relative
    padding 53px 22px 45px 20px
    overflow hidden
    height 735px
    .content-wrapper
      background #fafafa
      overflow hidden
      position relative
      display flex
      flex-direction column
      flex-grow 1
      max-height 637px
      min-height 100%
  .phone
    position absolute
    left 0
    top 0
    z-index 1
    pointer-events none
  .search
    display flex
    justify-content space-between
    align-items center
    input
      padding 5px 35px 5px 5px
      text-overflow ellipsis
      overflow hidden
      flex-grow 1
      line-height 2
      font-size 20px
      outline none
      border none
      border-bottom 2px solid gray
      &:focus
        border-bottom 2px solid #7fcaa8
    i
      position absolute
      right 5px

@media (orientation: portrait)
  .phone_border_wrapper
    width 100% !important
    height 100% !important
    padding 0 !important
    .content-wrapper
      max-height 100% !important
  .phone
    display none
  </style>
<style lang="stylus">
.wrapper_list
  width 100% !important
  padding 0 !important
</style>
