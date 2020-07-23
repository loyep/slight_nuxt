<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/Header/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
  },
})
</script>
