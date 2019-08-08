<template lang="pug">
  .wrapper.fadeIn
    .header
      h1.header-title 0808
      .cake-field
        font-awesome-icon.icon-cake(icon="birthday-cake")
        .words {{ hitokoto[num] }}
    Navibar
    transition()
      .container
        router-view
</template>

<script>
  import Vue from 'vue'
  import Navibar from './components/Navibar.vue'

  let ran = Math.floor( Math.random() * 4 )

  export default {
    components: {
      Navibar,
    },
    data() {
      return {
        hitokoto:  [
          "リンク踏んでくれた！うれしいです！",
          "今日もゴミみたいに暑いですね。30℃越えやめてほしいです",
          "もう年を数えるのはやめます",
          "今日は猫の日だそうです",
        ],
        num: ran
      }
    }
  }
</script>
