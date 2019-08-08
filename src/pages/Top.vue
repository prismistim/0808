<template lang="pug">
  div
    h3.section-title おしらせ
    ul.news-field
      NewsItem(
        v-for = "item in news"
        v-bind:date = "item.date"
        v-bind:title = "item.title"
        v-bind:description = "item.description"
        :key = "item.id"
      )
    h3.section-title これはなんだんだ
    p.description スタのん / ユキソラ / snowsphere / 海月 が誕生日を迎えるたびに更新するサイトです。個人的な内容で非常につまらないと思いますが、よかったらご覧ください。
</template>

<script>
import NewsItem from '../components/NewsItem.vue'
import news_data from '../data/news.json'

export default {
  name: 'top',
  components: {
    NewsItem,
  },
  data() {
    return {
      news: news_data
    }
  }
}
</script>

