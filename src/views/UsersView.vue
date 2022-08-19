<template>
  <create-popup />
  <users-row
    v-for="(item) of data(Number(id))"
    :key="item.id"
    :id="item.id"
    :userName="item.userName"
    :date="item.date">
  </users-row>
</template>

<script>
import UsersRow from '@/components/UsersRow.vue';
import CreatePopup from '@/components/CreatePopup.vue';

import { defineComponent, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLinkStore } from '../store/links';

export default defineComponent({
  components: { UsersRow, CreatePopup },
  name: 'UsersView',
  setup() {
    const store = useLinkStore()
    const router = useRouter()
    const id = ref(router.currentRoute.value.params?.id)

    onUpdated(() => {
      id.value = router.currentRoute.value.params?.id
    })

    return {
      data: store.getData,
      id
    }
  }
})
</script>
