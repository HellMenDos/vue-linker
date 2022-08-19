<template>
  <input
    :value="value"
    @change="setValue($event)"
    :placeholder="placeholderName"
  />
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String
    }
  },
  setup(props, { emit }) {
    const data = ref('')
    const placeholderName = computed(() => props.name.charAt(0).toUpperCase() + props.name.slice(1))

    const setValue = ({ target }) => {
      data.value = target.value
      emit('data', data.value, props.name)
    }

    return {
      ...props,
      data,
      setValue,
      placeholderName
    }
  },
});
</script>

<style scoped>
  input {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0px;
  }
</style>
