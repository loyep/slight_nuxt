<template>
  <div>
    Post
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  asyncData({ params, redirect }: Context) {
    if (!params.slug) {
      redirect('/404')
    }
  },
})
export default class Special extends Vue {}
</script>
