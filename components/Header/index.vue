<template>
  <header class="header">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <nav class="navbar navbar-expand-lg shadow">
      <div class="container">
        <h1 class="navbar-brand order-2 order-lg-1">
          <a href="https://www.suxing.me/" rel="home" class="logo" title="苏醒">
            <img
              src="//res.suxing.me.nicetheme.xyz/wp-content/themes/PandaPRO-1.1.1/images/logo.png"
              class="d-none logo-light nc-no-lazy"
              alt="苏醒" /><img
              src="//res.suxing.me.nicetheme.xyz/wp-content/uploads/2019/12/2019121913541667.png"
              class="d-inline-block logo-dark nc-no-lazy"
              alt="苏醒"
          /></a>
        </h1>

        <button
          id="sidebarCollapse"
          class="navbar-toggler order-1"
          type="button"
        >
          <i class="text-xl iconfont icon-menu-line"></i>
        </button>
        <button
          class="navbar-toggler nav-search order-3 collapsed"
          data-target="#navbar-search"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="navbar-search"
        >
          <i class="text-xl iconfont icon-search-line"></i>
          <i class="text-xl iconfont icon-close-fill"></i>
        </button>
        <div class="collapse navbar-collapse order-md-2">
          <ul class="navbar-nav main-menu ml-4 mr-auto">
            <li
              id="menu-item-1763"
              class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1763"
            >
              <a href="https://www.suxing.me/" aria-current="page">首页</a>
            </li>
            <li
              id="menu-item-1506"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1506"
            >
              <a target="_blank" rel="nofollow" href="https://www.nicetheme.cn"
                ><i
                  class="text-xl iconfont icon-socialwordpressoutline mr-1"
                ></i
                >主题</a
              >
            </li>
            <li
              id="menu-item-1567"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1567"
            >
              <a href="https://www.suxing.me/category/wp-courses">教程</a>
            </li>
            <li
              id="menu-item-1568"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1568"
            >
              <a href="https://www.suxing.me/category/blog">博客</a>
            </li>
            <li
              id="menu-item-649"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-649"
            >
              <a href="https://www.suxing.me/category/news">唠叨</a>
            </li>
            <li
              id="menu-item-1769"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"
            >
              <a href="https://www.suxing.me/links">基友团</a>
            </li>
            <li
              id="menu-item-8"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-8"
            >
              <a href="https://www.suxing.me/liuyan">留言</a>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center order-1 order-lg-2">
            <li class="nav-item ml-1 ml-md-2">
              <a
                class="btn btn-link btn-icon nav-link nav-search collapsed"
                href="#navbar-search"
                data-toggle="collapse"
                title="Search"
                aria-expanded="false"
                aria-controls="navbar-search"
              >
                <span
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="搜索"
                >
                  <i class="text-lg iconfont icon-search-line"></i>
                  <i class="text-lg iconfont icon-close-fill"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mobile-sidebar">
      <div class="mobile-sidebar-header text-right p-3">
        <div class="btn-group btn-group-sm btn-group-rounded">
          <button type="button" class="btn btn-link sidebar-close">
            <i class="d-block text-xl iconfont icon-close-circle-fill"></i>
          </button>
        </div>
      </div>
      <ul class="mobile-sidebar-menu nav flex-column">
        <li
          id="menu-item-1776"
          class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1776"
        >
          <a href="https://www.suxing.me/" aria-current="page"
            ><i class="iconfont icon-home--line"></i>首页</a
          >
        </li>
        <li
          id="menu-item-1779"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1779"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nicetheme.cn/store/pandapro"
            ><i class="iconfont icon-socialwordpressoutline"></i>主题</a
          >
        </li>
        <li
          id="menu-item-1778"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1778"
        >
          <a href="https://www.suxing.me/category/wp-courses"
            ><i class="iconfont icon-file-code-line"></i>教程</a
          >
        </li>
        <li
          id="menu-item-1774"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1774"
        >
          <a href="https://www.suxing.me/category/blog"
            ><i class="iconfont icon-t-box-line"></i>博客</a
          >
        </li>
        <li
          id="menu-item-1775"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1775"
        >
          <a href="https://www.suxing.me/category/news"
            ><i class="iconfont icon-message--line"></i>唠叨</a
          >
        </li>
        <li
          id="menu-item-1777"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1777"
        >
          <a href="https://www.suxing.me/liuyan"
            ><i class="iconfont icon-chat--line"></i>留言</a
          >
        </li>
      </ul>
    </div>
    <div id="navbar-search" class="navbar-search collapse">
      <div class="container">
        <form
          id="searchform"
          method="get"
          role="search"
          class="searchform shadow"
          action="https://www.suxing.me/"
        >
          <div class="input-group">
            <input
              id="s"
              type="text"
              name="s"
              placeholder="请输入搜索关键词并按回车键…"
              class="form-control"
              required=""
            />
            <div class="input-group-append">
              <button class="btn btn-nostyle" type="submit">
                <i class="text-lg iconfont icon-search-line"></i>
              </button>
            </div>
          </div>
          <!-- /input-group -->
        </form>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  onUnmounted,
} from '@vue/composition-api'
import { Tooltip } from 'ant-design-vue'

export default defineComponent({
  name: 'SHeader',
  components: {
    ATooltip: Tooltip,
  },
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const scroll = ref(false)
    const onScroll = () => {
      scroll.value =
        document.body.scrollTop + document.documentElement.scrollTop > 72
    }
    onMounted(() => {
      document.addEventListener('scroll', onScroll, true)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', onScroll)
    })
    return { scroll }
  },
})
</script>
