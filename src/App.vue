<template>
  <nav v-if="isAuth">
    User
  </nav>
  <nav v-else>
    <router-link to="/">Login</router-link> |
    <router-link to="/reg">Registration</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
import useAuth from '@/hooks/useAuth';

export default defineComponent({
  setup() {
    const auth = useAuth()
    return {
      isAuth: auth.isAuth()
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
</style>
