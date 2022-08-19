<template>
  <nav v-if="isAuth" class="profile">
    <h1>User</h1>
    <button-field @click="logout" title="Exit"></button-field>
  </nav>
  <nav v-else>
    <router-link to="/">Login</router-link> |
    <router-link to="/reg">Registration</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import useAuth from '@/hooks/useAuth';
import ButtonField from '@/components/ButtonField.vue';

export default defineComponent({
  components: { ButtonField },
  setup() {
    const auth = useAuth()
    const isAuth = ref(auth.isAuth())
    const route = useRoute()

    watch(
      () => route.fullPath,
      async () => {
        isAuth.value = auth.isAuth()
      }
    )
    return {
      isAuth,
      logout: auth.logout
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
