<template>
  <div class="row-block">
    <div class="row-item">{{ id }}</div>
    <div class="row-item">{{ userName }}</div>
    <div class="row-item">{{ date }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: Number
    },
    userName: {
      type: String
    },
    date: {
      type: Date
    }
  },
  setup(props) {
    return {}
  },
})
</script>

<style scoped>
  .row-block {
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    width: 100%;
    margin: 10px auto;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
</style>
