<template>
  <div>
    Post
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Context } from '@nuxt/types'

export default defineComponent({
  name: 'Post',
  asyncData({ redirect, params }: Context) {
    if (!params.slug) {
      redirect('/404')
    }
  },
  setup() {
    return {}
  },
})
</script>
