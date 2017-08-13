<template>
  <div class="m-header">
    <ul>
      <router-link :to="{name: 'my'}" tag="li">我的</router-link>
      <router-link :to="{name: 'music-museum'}" tag="li">音乐馆</router-link>
      <router-link :to="{name: 'discovery'}" tag="li">发现</router-link>
    </ul>
    <div class="search">
      <input type="text">
      <span class="placeholder">搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/style/var.scss";

  .m-header {
    display: flex;
    flex-direction: column;
    height: $header-height;

    background: $header-bg;
    color: $header-color;
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      height: $header-nav-height;
      line-height: $header-nav-height;

      li {
        margin: 0 2rem;

        font-size: 2.6rem;
        &.active {
          font-weight: bolder;
          font-size: 2.6rem;
          color: $header-color-active;
        }
      }
    }
    .search{
      width: 100%;
      padding: 0 1rem 1rem;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input{
        width: 100%;
        height: 100%;
        line-height: 100%;

        border: 0;
        outline: none;
        background: darken($header-bg, 5%);
      }
      .placeholder{
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        text-align: center;
      }
    }
  }
</style>
