import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Base from './views/base.vue'
import Table from './views/Table.vue'
import FlexBox from './views/FlexBox.vue'
import DraggableBoxes from './views/DraggableBoxes.vue'
import LessonOne from './views/LessonOnePage.vue'
import Variables from './views/Variables.vue'
import Todo from './components/appTodo/appTodoView.vue'
import TodoMobile from './components/appTodo/appTodoViewMobile.vue'
import Testflex from './views/Testflex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/base',
      name: 'Base',
      component: Base
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/flexbox',
      name: 'FlexBox',
      component: FlexBox
    },
    {
      path: '/draggable',
      name: 'DraggableBoxes',
      component: DraggableBoxes
    },
    {
      path: '/LessonOne',
      name: 'LessonOne',
      component: LessonOne
    },
    {
      path: '/Variables',
      name: 'Variables',
      component: Variables
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/mTodo',
      name: 'mTodo',
      component: TodoMobile
    },
    {
      path: '/Testflex',
      name: 'Testflex',
      component: Testflex
    }
  ]
})
