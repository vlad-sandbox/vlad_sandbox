<template>
    <app-task-list :data="data"></app-task-list>
</div>

</template>

<script>
import appTaskList from './todoComponents/appTaskList'
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
      data: dataItems
    }
  },
  created () {
    console.log(this.data)
  },
  methods: {
  },
  components: {
    appTaskList
  }
}
</script>

<style>
</style>
