<template lang="pug">
  .wrapper.fadeIn
    .header
      .title HBD2ME
      font-awesome-icon(icon="birthday-cake")
    Navibar
    transition()
      .container
        router-view
</template>

<script>
  import Vue from 'vue'
  import Navibar from './components/Navibar.vue'
  export default {
    components: {
      Navibar
    },
  }
</script>
