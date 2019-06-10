<template>
<div class="screen_wrapper">
    <app-task-list :data="data" @click.native="toggleCreateTask()"></app-task-list>
    <app-task-manager @create="pushTask" v-if="createNewTask"></app-task-manager>
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
    'date': '19.06.04',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание первой задачи'
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание второй задачи'
      },
      {
        'name': 'Третья задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание третьей задачи'
      }
    ]
  },
  {
    'date': '19.06.05',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'close',
        'description': 'Описание первой задачи'
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание второй задачи'
      }
    ]
  },
  {
    'date': '19.06.06',
    'tasks': [
      {
        'name': 'Первая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание первой задачи'
      },
      {
        'name': 'Вторая задача',
        'date_start': dateNow(),
        'date_planning': datePlan(),
        'status': 'open',
        'description': 'Описание второй задачи'
      }
    ]
  }
]
export default {
  name: 'todo',
  data () {
    return {
      data: dataItems,
      createNewTask: false
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
      console.log(newTask)
      this.toggleCreateTask()
    },
    toggleCreateTask () {
      this.createNewTask = !this.createNewTask
      console.log(this.createNewTask)
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
</style>
