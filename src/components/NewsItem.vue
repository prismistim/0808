<template lang="pug">
  li.news-item
    .news-date {{ date }}
    .news-title {{ title }}
    .news-description {{ description }}
</template>

<script>
export default {
  name: 'news_item',
  props: ['date', 'title', 'description']
}
</script>

