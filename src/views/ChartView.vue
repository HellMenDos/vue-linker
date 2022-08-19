<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data">
        <template #layers>
          <Line :dataKeys="['name', 'pl']" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
  import { defineComponent, ref, reactive } from 'vue'
  import { Responsive, Chart, Line } from 'vue3-charts'

  export default defineComponent({
  name: 'ChartView',
  components: { Responsive, Chart, Line },
  setup() {
    const data = reactive([
      { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
      { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
      { name: 'Apr', pl: 400, avg: 400, inc: 500 },
      { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
      { name: 'May', pl: 200, avg: 100, inc: 200 },
      { name: 'Jun', pl: 600, avg: 400, inc: 300 },
      { name: 'Jul', pl: 500, avg: 90, inc: 100 }
    ])
    console.log(2)
    const direction = ref('horizontal')
    const margin = ref({
      left: 10,
      top: 20,
      right: 20,
      bottom: 10
    })

    return { data, direction, margin }
  }
  })
</script>
