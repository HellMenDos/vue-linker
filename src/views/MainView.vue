<template>
  <h1>Main</h1>
  <nav>
    <router-link v-for="(item) in links" :key="item.id" :to="`/main/${item.id}`">
      {{ item.name }} |
    </router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';
import { useLinkStore } from '../store/links';

export default defineComponent({
  name: 'MainView',
  setup() {
    const store = useLinkStore()

    return {
      links: store.allData
    }
  }
})
</script>
