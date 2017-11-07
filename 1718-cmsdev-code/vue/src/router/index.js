import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AddArticle from '@/components/AddArticle'
import ReadArticle from '@/components/ReadArticle'

import Courses from '@/components/Courses'
import Students from '@/components/Students'
import Instructors from '@/components/Instructors'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/add-article',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: '/read-article',
      name: 'ReadArticle',
      component: ReadArticle
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component: Instructors
    }
  ]
})
