<template lang="pug">
  div
    h3.section-title やること
    p.description 次の誕生日までにやることリスト
    ul.todo-field
      TodoItem(
        v-for = 'item in todos'
        v-bind:status = 'item.do',
        v-bind:title = 'item.title'
        :key = 'item.id'
      )
    
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import todo_data from '../data/todo.json'

export default {
  name: 'todo',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: todo_data
    }
  }
}
</script>
