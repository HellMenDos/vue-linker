<template>
  <button type="submit">{{ title }}</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String
    }
  },
  setup(props) {
    return {
      ...props
    }
  },
})
</script>

<style scoped>
  button {
    background-color: rgb(23, 52, 172);
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
</style>
