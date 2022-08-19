<template>
  <button-field title="create" @click="open"></button-field>
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <form-block :submit="submit">
        <h1>Create Url</h1>
        <input-field @data="input" name="url" />
        <input-field @data="input" name="name" />
        <div class="button-block">
          <button-field title="submit" />
          <button-field title="close" @click="close"/>
        </div>
      </form-block>
    </div>
  </teleport>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ButtonField from '@/components/ButtonField.vue';
import FormBlock from '@/components/FormBlock.vue';
import InputField from '@/components/InputField.vue';
import useForm from '@/hooks/useForm';

export default defineComponent({
  components: { ButtonField, FormBlock, InputField },
  setup() {
    const modalOpen = ref(false)
    const state = useForm({
      url: '',
      name: ''
    })

    const close = () => {
      modalOpen.value = false
    }

    const open = () => {
      modalOpen.value = true
    }
    return {
      ...state,
      close,
      open,
      modalOpen
    }
  },
})
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
  border-radius: 10px;
}
.button-block {
  display: flex;
  justify-content: space-between;
}
</style>
