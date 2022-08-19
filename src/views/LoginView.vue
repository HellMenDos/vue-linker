<template>
  <h1>Login</h1>
  <form-block :submit="submit">
    <input-field @data="input" name="email" />
    <input-field @data="input" name="password" />
    <button-field title="submit" />
  </form-block>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ButtonField from '@/components/ButtonField.vue';
import FormBlock from '@/components/FormBlock.vue';
import InputField from '@/components/InputField.vue';
import useForm from '@/hooks/useForm';
import useAuth from '@/hooks/useAuth';

export default defineComponent({
  name: 'LoginView',
  components: { InputField, ButtonField, FormBlock },
  setup(_, context) {
    const auth = useAuth()
    const state = useForm({
      email: '',
      password: ''
    })

    const submit = (e) => {
      e.preventDefault()
      auth.login()
    }

    return {
      ...state,
      submit
    }
  }
})
</script>
