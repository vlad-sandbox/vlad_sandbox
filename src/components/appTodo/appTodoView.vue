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
    console.log(this.data)
  },
  methods: {
    pushTask (newTask) {
      console.log(newTask)
      this.toggleCreateTask()
    },
    toggleCreateTask () {
      this.createNewTask = !this.createNewTask
      console.log(this.createNewTask)
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
</style>
