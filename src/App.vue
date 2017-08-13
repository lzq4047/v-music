<template>
  <div id="app">
    <m-header></m-header>
    <transition>
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/MHeader'
  export default {
    name: 'app',
    components: {
      MHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "./common/style/var.scss";
  .router-view{
    position: fixed;
    top: $header-height;
    bottom: 0;
    width: 100%;

    background: $main-bg;
  }
</style>
