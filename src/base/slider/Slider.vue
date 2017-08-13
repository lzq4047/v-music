<template>
  <div class="slider">
    <ul class="slider-lists" :style="{'margin-left': marginLeft}">
      <li class="slider-pre" v-if="round" v-html="preHTML"></li>
      <slot></slot>
      <li class="slider-next" v-if="round" v-html="nextHTML"></li>
    </ul>
    <ul class="slider-dots" v-if="showDots">
      <li class="slider-dot" v-for="(item, index) in $slots.default" :key="index" :class="{active: activeIndex === index}" @click="handleDotClick(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      preHTML: '',
      nextHTML: '',
      activeIndex: 0,
      autoplayInterval: null,
      activeIncrement: true
    }
  },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    round: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    showDots: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    marginLeft: function () {
      return `${-this.activeIndex * 100}%`
    }
  },
  methods: {
    _init: function () {
      if (this.round) {
        this.activeIndex = 1
        this.preHTML = this.$slots.default[this.$slots.default.length - 1].elm.innerHTML
        this.nextHTML = this.$slots.default[0].elm.innerHTML
      }
    },
    _setNextActiveIndex: function () {
      let nextActiveIndex = this.activeIncrement ? this.activeIndex + 1 : this.activeIndex - 1
      if (this.round) {
        if (nextActiveIndex > this.$slots.default.length) {
          nextActiveIndex = 1
        } else if (nextActiveIndex < 0) {
          nextActiveIndex = this.$slots.default.length - 1
        }
      } else {
        if (nextActiveIndex >= this.$slots.default.length - 1) {
          this.activeIncrement = false
        } else if (nextActiveIndex <= 0) {
          this.activeIncrement = true
        }
      }
      this.activeIndex = nextActiveIndex
    },
    _play: function () {
      if (this.autoplayInterval) {
        clearTimeout(this.autoplayInterval)
      }
      this.autoplayInterval = setInterval(this._setNextActiveIndex, this.interval)
    },
    handleDotClick: function (index) {
      this.activeIndex = index
      this._play()
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this._init()
      if (this.autoPlay) {
        this._play()
      }
    })
  },
  destroyed: function () {
    this.autoplayInterval && clearInterval(this.autoplayInterval)
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  .slider-lists {
    display: flex;
    width: 100%;

    transition: margin-left .3s ease-in-out;

    li {
      flex: 0 0 100%;
    }
  }
  .slider-dots {
    position: absolute;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    width: 100%;

    .slider-dot {
      display: inline-block;
      width: 0;
      height: 0;
      margin: 0 0.5rem;

      font-size: 0;
      border: 0.6rem solid rgba(144, 144, 144, 0.8);
      border-radius: 50%;
      transition: border-color .3s ease-in-out;

      &.active {
        border-color: #fff;
      }
    }
  }
}
</style>
