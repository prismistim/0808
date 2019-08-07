import Vue from 'vue'
import VueRouter from 'vue-router'

// import router-pages
import Top from '../pages/Top.vue'
import Bio from '../pages/Bio.vue'
import Todo from '../pages/Todo.vue'
import Happy from '../pages/Happy.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    {
      name: 'top',
      path: '/',
      component: Top
    },
    {
      name: 'bio',
      path: '/bio',
      component: Bio
    },
    {
      name: 'todo',
      path: '/todo',
      component: Todo
    },
    {
      name: 'happy',
      path: '/happy',
      component: Happy
    }
  ]
})

export default router