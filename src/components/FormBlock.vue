<template>
  <form @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    submit: {
      type: Function
    }
  },
  setup(props) {
    return {}
  },
})
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
</style>
