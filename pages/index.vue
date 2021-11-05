<template>
  <div class="root-wrapper">
    <TODOList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TODOList from '../components/TODO/TODOList.vue'

export default Vue.extend({
  data: function () {
    return {

    }
  },
  components: {
    TODOList
  }
})
</script>

<style lang="css" >
@import url('../styles/main.css');
  .root-wrapper {
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212121;
    color: #fff;
    padding: 200px 400px;
  }
</style>
