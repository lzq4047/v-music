<template>
  <div class="block">
    <div class="block-heading">
      <div class="block-title">
        <span v-if="title" v-text="title"></span>
        <slot name="title"></slot>
      </div>
      <span v-if="showIcon" class="icon iconfont" :class="icon"></span>
    </div>
    <div class="block-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'icon-arrow-right'
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  .block-heading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    line-height: 1;

    font-size: 3.5rem;
    .block-title {
      font-weight: bold;
    }
    .icon {
      position: absolute;
      right: 2rem;

      font-size: 4rem;
    }
  }
}
</style>

