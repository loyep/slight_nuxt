<template>
  <footer class="footer bg-dark py-3 py-lg-4">
    <div class="container">
      <div class="d-lg-flex flex-md-fill align-items-lg-center">
        <div class="d-lg-flex flex-lg-column mr-lg-4">
          <div class="footer-menu">
            <ul>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1763"
              >
                <a href="https://www.suxing.me/" aria-current="page">首页</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1506"
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.nicetheme.cn"
                  ><i
                    class="text-xl iconfont icon-socialwordpressoutline mr-1"
                  ></i
                  >主题</a
                >
              </li>
              <li
                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1567"
              >
                <a href="https://www.suxing.me/category/wp-courses">教程</a>
              </li>
              <li
                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1568"
              >
                <a href="https://www.suxing.me/category/blog">博客</a>
              </li>
              <li
                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-649"
              >
                <a href="https://www.suxing.me/category/news">唠叨</a>
              </li>
              <li
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"
              >
                <a href="https://www.suxing.me/links">基友团</a>
              </li>
              <li
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-8"
              >
                <a href="https://www.suxing.me/liuyan">留言</a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright text-xs">
            Copyright © 2012-2020
            <a href="https://www.suxing.me" title="苏醒" rel="home">苏醒</a>.
            Designed by
            <a
              href="https://www.nicetheme.cn"
              title="nicetheme奈思主题-资深的原创WordPress主题开发团队"
              target="_blank"
              >nicetheme</a
            >.
          </div>
        </div>
        <div class="flex-lg-fill"></div>
        <div class="mt-3 mt-lg-0 mx-n1 flex-shrink-0">
          <span class="d-inline-block p-1">
            <a
              href="javascript:"
              data-img="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/12/2019121616515042.jpg"
              data-title="nicetheme官方公众号"
              data-desc="扫码加入，购主题有福利"
              class="single-popup btn btn-secondary btn-weixin btn-icon"
            >
              <span><i class="text-lg iconfont icon-wechat-fill"></i></span>
            </a>
          </span>
        </div>
      </div>
      <div class="footer-links border-top border-secondary pt-3 mt-3 text-xs">
        <span>友情链接: </span>
        <a href="http://www.mywpku.com/" target="_blank">WP酷</a>
        <a href="https://salongweb.com" target="_blank">萨龙网络</a>
        <a href="http://www.2zzt.com" target="_blank">WordPress主题</a>
        <a href="https://www.mpyit.com/" target="_blank">殁漂遥</a>
        <a href="https://www.wpcom.cn" target="_blank">WordPress主题</a>
        <a href="https://www.suxing.me/" target="_blank">WordPress</a>
        <a href="https://www.themepark.com.cn" target="_blank"
          >WordPress主题公园</a
        >
        <a href="http://www.uazoh.com/" target="_blank">Uazoh优佐生活</a>
        <a href="https://www.ugediao.com" target="_blank">有格调</a>
        <a href="https://gordonsky.cn" target="_blank">Gordon</a>
        <a href="https://www.xintheme.com" target="_blank">wordpress主题</a>
        <a href="https://zhan.leiue.com" target="">泪雪建站</a>
        <a href="https://www.dedesos.com/" target="_blank">织梦模板</a>
        <a href="https://www.zhutihome.net/" target="_blank">主题之家</a>
        <a href="https://www.bldhw.com" target="_blank">菠萝导航网</a>
        <a href="https://www.nicetheme.cn/" target="_blank">wordpress主题</a>
      </div>
    </div>
    <a-back-top :style="{ right: '28px' }">
      <a-button type="info" icon="arrow-up" size="large"></a-button>
    </a-back-top>
  </footer>
</template>

<script lang="ts">
import { BackTop } from 'ant-design-vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ABackTop: BackTop,
  },
})
export default class Footer extends Vue {}
</script>
