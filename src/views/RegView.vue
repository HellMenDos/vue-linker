<template>
  <h1>Registration</h1>
  <form-block @submit="submit">
    <input-field name="email" @data="input"/>
    <input-field name="password" @data="input"/>
    <input-field name="confirmPassword" @data="input"/>
    <button-field title="Submit"/>
  </form-block>
</template>

<script>
import ButtonField from '@/components/ButtonField.vue'
import InputField from '@/components/InputField.vue'
import FormBlock from '@/components/FormBlock.vue'
import { defineComponent } from 'vue'
import useForm from '@/hooks/useForm';

export default defineComponent({
  components: { InputField, ButtonField, FormBlock },
  setup() {
    const state = useForm({
      email: '',
      password: '',
      confirmPassword: ''
    })

    const submit = (e) => {
      e.preventDefault()

      console.log(state)
    }

    return {
      ...state,
      submit
    }
  },
})
</script>
