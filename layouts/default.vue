<template>
  <div>
    <SHeader></SHeader>
    <Nuxt />
    <SFooter></SFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    SHeader: Header,
    SFooter: Footer,
  },
})
</script>
