<template>
  <div>
    <div class="list-banner list-rounded pt-3 pt-md-5">
      <div class="container">
        <a-carousel arrows>
          <div class="card item list-item list-overlay-content m-0">
            <div class="media media-21x9">
              <a
                class="media-content"
                target="_blank"
                href="https://www.mywpku.com/diaspora.html"
              >
                <img
                  src="https://cdn.mywpku.com/wp-content/uploads/2016/05/diaspora-index.png"
                  alt=""
                />
                <span class="overlay"> </span>
              </a>
            </div>
            <div class="list-content p-3 p-md-5 text-center">
              <div class="list-body">
                <a
                  href="https://www.mywpku.com/diaspora.html"
                  target="_blank"
                  class="h4 text-white h-2x m-0"
                  >[持续更新]Diaspora – 素色响应式单栏 WordPress 博客主题</a
                >
              </div>
            </div>
          </div>
          <div class="card item list-item list-overlay-content m-0">
            <div class="media media-21x9">
              <a
                class="media-content"
                target="_blank"
                href="https://www.mywpku.com/diaspora.html"
              >
                <img
                  src="https://cdn.mywpku.com/wp-content/uploads/2016/05/diaspora-index.png"
                  alt=""
                />
                <span class="overlay"> </span>
              </a>
            </div>
            <div class="list-content p-3 p-md-5 text-center">
              <div class="list-body">
                <a
                  href="https://www.mywpku.com/diaspora.html"
                  target="_blank"
                  class="h4 text-white h-2x m-0"
                  >[持续更新]Diaspora – 素色响应式单栏 WordPress 博客主题</a
                >
              </div>
            </div>
          </div>
          <div class="card item list-item list-overlay-content m-0">
            <div class="media media-21x9">
              <a
                class="media-content"
                target="_blank"
                href="https://www.mywpku.com/diaspora.html"
              >
                <img
                  src="https://cdn.mywpku.com/wp-content/uploads/2016/05/diaspora-index.png"
                  alt=""
                />
                <span class="overlay"> </span>
              </a>
            </div>
            <div class="list-content p-3 p-md-5 text-center">
              <div class="list-body">
                <a
                  href="https://www.mywpku.com/diaspora.html"
                  target="_blank"
                  class="h4 text-white h-2x m-0"
                  >[持续更新]Diaspora – 素色响应式单栏 WordPress 博客主题</a
                >
              </div>
            </div>
          </div>
        </a-carousel>
      </div>
    </div>
    <main class="py-3 pt-md-4 pb-md-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="list-home list-grid list-grid-padding">
              <post-item v-for="post in posts" :key="post.id"></post-item>
            </div>

            <nav
              class="navigation pagination"
              role="navigation"
              aria-label="Posts Navigation"
            >
              <h2 class="screen-reader-text">Posts Navigation</h2>
              <div class="nav-links">
                <span aria-current="page" class="page-numbers current">1</span>
                <a class="page-numbers" href="https://www.suxing.me/page/2"
                  >2</a
                >
                <span class="page-numbers dots">…</span>
                <a class="page-numbers" href="https://www.suxing.me/page/18">
                  18
                </a>
                <a
                  class="next page-numbers"
                  href="https://www.suxing.me/page/2"
                >
                  <span class="btn btn-light btn-icon btn-rounded btn-sm">
                    <span
                      ><i class="text-md iconfont icon-arrow-right-s-line"></i>
                    </span>
                  </span>
                </a>
              </div>
            </nav>
          </div>

          <div
            class="sidebar col-lg-4 d-none d-lg-block"
            style="
              position: relative;
              overflow: visible;
              box-sizing: border-box;
              min-height: 1px;
            "
          >
            <div
              class="theiaStickySidebar"
              :style="{
                paddingTop: 0,
                paddingBottom: '1px',
                position: 'static',
                transform: 'none',
                top: 0,
                left: '837px',
              }"
            >
              <recommend></recommend>
              <div
                id="media_image-3"
                class="card card-sm widget widget_media_image"
              >
                <a href="https://www.nicetheme.cn/store/pandapro"
                  ><img
                    width="1200"
                    height="1029"
                    src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/06/2019062014334082-e1561041230505.png"
                    class="image wp-image-1764 attachment-full size-full loaded"
                    alt=""
                    style="max-width: 100%; height: auto;"
                    data-src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/06/2019062014334082-e1561041230505.png"
                    data-nclazyload="true"
                    data-was-processed="true"
                /></a>
              </div>
              <div
                id="media_image-9"
                class="card card-sm widget widget_media_image"
              >
                <a href="https://www.nicetheme.cn/store/cosy"
                  ><img
                    width="600"
                    height="450"
                    src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/07/2019070406255365.png"
                    class="image wp-image-1788 attachment-full size-full loaded"
                    alt=""
                    style="max-width: 100%; height: auto;"
                    data-src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/07/2019070406255365.png"
                    data-nclazyload="true"
                    data-was-processed="true"
                /></a>
              </div>
              <div
                class="resize-sensor"
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  overflow: hidden;
                  z-index: -1;
                  visibility: hidden;
                "
              >
                <div
                  class="resize-sensor-expand"
                  style="
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    z-index: -1;
                    visibility: hidden;
                  "
                >
                  <div
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      transition: all 0s ease 0s;
                      width: 390px;
                      height: 2154px;
                    "
                  ></div>
                </div>
                <div
                  class="resize-sensor-shrink"
                  style="
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    z-index: -1;
                    visibility: hidden;
                  "
                >
                  <div
                    style="
                      position: absolute;
                      left: 0;
                      top: 0;
                      transition: 0s;
                      width: 200%;
                      height: 200%;
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Carousel } from 'ant-design-vue'
import PostItem from '../components/Post/Item.vue'
import Recommend from '../components/Post/Recommend.vue'

function getMockData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const title = '测试title'
      resolve(title)
    }, 0)
  })
}

@Component({
  components: {
    ACarousel: Carousel,
    Recommend,
    PostItem,
  },
  async asyncData() {
    const title = await getMockData()
    const posts = Array.from(Array(100), (v, k) => ({
      id: k,
      title: '标题' + k,
      desc: v,
    }))
    return { title, posts }
  },
})
export default class Home extends Vue {
  mounted() {
    console.log('ggggg')
  }

  beforeDestroy() {
    console.log('ffff')
  }
}
</script>

<style lang="less">
//
</style>
