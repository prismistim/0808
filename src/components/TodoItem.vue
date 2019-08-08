<template lang="pug">
  li.todo-item
    .todo-title
      span.todo-status {{ status }}
      | {{ title }}
</template>

<script>
export default {
  name: 'todo_item',
  props: ['status', 'title']
}
</script>
