<template>
  <header class="header">
    <nav class="navbar navbar-expand-md fixed-top scroll">
      <div class="container">
        <h1 class="navbar-brand order-1">
          <a href="https://www.ugediao.com/" rel="home" class="d-block">
            <img
              class="logo"
              src="https://uhost.ugediao.com/wp-content/uploads/2019/04/logocenterwhite.png"
              alt="有格调"
            />
            <img
              class="logo logo-night"
              src="https://uhost.ugediao.com/wp-content/uploads/2019/04/logocenterwhite.png"
              alt="有格调"
            />
          </a>
        </h1>
        <ul
          class="nav main-submenu align-items-center flex-row flex-shrink-0 order-2 order-md-3"
        >
          <li class="nav-item">
            <a
              href="javascript:"
              class="nice-tooltip-hide nav-link search-popup text-lg"
              data-toggle="nicetooltip"
              data-placement="bottom"
              title=""
              data-original-title="搜索"
              ><i class="d-block iconfont icon-search"></i
            ></a>
          </li>
          <li class="nav-item d-lg-none">
            <a
              id="mobile-sidebar-trigger"
              href="javascript:"
              class="nav-link text-lg"
              ><i class="d-block iconfont icon-menu"></i
            ></a>
          </li>
          <li class="nav-item d-none d-lg-inline-block">
            <a
              href="https://www.ugediao.com/tougao"
              target="_blank"
              class="nav-link text-lg"
              data-toggle="nicetooltip"
              data-placement="bottom"
              title=""
              data-original-title="我要投稿"
              ><i class="d-block iconfont icon-bianji"></i
            ></a>
          </li>
          <li class="nav-item ml-3">
            <a
              class="btn btn-light btn-sm"
              href="https://www.ugediao.com/sign/user/register"
              >注册</a
            >
          </li>
          <li class="nav-item ml-1">
            <a
              class="btn btn-light btn-sm"
              href="https://www.ugediao.com/sign/user/login"
              >登录</a
            >
          </li>
        </ul>
        <div
          class="collapse navbar-collapse show navbar-scroll order-3 order-md-2 mx-md-4"
        >
          <ul class="navbar-nav main-menu d-none d-lg-flex mr-auto px-4">
            <li
              id="menu-item-368"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-368"
            >
              <a href="https://www.ugediao.com/category/reading">文字</a>
            </li>
            <li
              id="menu-item-367"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-367"
            >
              <a href="https://www.ugediao.com/category/music">音乐</a>
            </li>
            <li
              id="menu-item-6099"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6099"
            >
              <a href="https://www.ugediao.com/category/games">游戏</a>
            </li>
            <li
              id="menu-item-369"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-369"
            >
              <a href="https://www.ugediao.com/category/videos">视频</a>
            </li>
            <li
              id="menu-item-370"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-370"
            >
              <a href="https://www.ugediao.com/category/software">软件</a>
            </li>
            <li
              id="menu-item-371"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-371"
            >
              <a href="https://www.ugediao.com/category/radio">电台</a>
            </li>
            <li
              id="menu-item-372"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-372"
            >
              <a href="https://www.ugediao.com/category/picture">图片</a>
            </li>
            <li
              id="menu-item-2383"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2383"
            >
              <a href="https://www.ugediao.com/zhuantituijian">专题推荐</a>
            </li>
            <li
              id="menu-item-6405"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6405"
            >
              <a href="https://www.ugediao.com/weibo">微博</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
})
</script>
