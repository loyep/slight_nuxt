<template>
  <div class="card card-sm">
    <div class="card-header widget-header">
      <span>文章推荐<i class="bg-primary"></i></span>
    </div>
    <div class="card-body">
      <div class="list-grid list-rounded my-n2">
        <div v-for="post in posts" :key="post.id" class="list-item py-2">
          <div class="media media-3x2 col-4 mr-3">
            <a
              class="media-content"
              href="https://www.suxing.me/blog/1960.html"
              target="_blank"
            >
              <img
                src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/12/2019122010054627-e1576836518634.png"
              />
            </a>
          </div>
          <div class="list-content py-0">
            <div class="list-body">
              <a
                href="https://www.suxing.me/blog/1960.html"
                target="_blank"
                class="list-title h-2x"
                >nicetheme出品的积木插件，这几个功能一定要用</a
              >
            </div>
            <div class="list-footer">
              <div class="text-muted text-xs">
                <time class="d-inline-block">2月前</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostRecommend extends Vue {
  private posts: any[] = []

  mounted() {
    this.posts = [{ id: 1 }, { id: 2 }]
  }
}
</script>
