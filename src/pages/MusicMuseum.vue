<template>
  <div class="music-museum">
    <div class="music-museum__slider">
      <slider v-if="slider.length">
        <li v-for="item in slider" :key="item.fid">
          <img :src="item.pic" :alt="item.title">
        </li>
      </slider>
    </div>
    <div class="channels">
      <ul class="channels-row" v-for="(channels, index) in groupedChannels" :key="index">
        <router-link class="channels-item" v-for="channel in channels" :key="channel.name" :to="{name: channel.path}" tag="li">
          <span class="icon" :class="channel.icon"></span>  
          <span v-text="channel.title"></span>
        </router-link>
      </ul>
    </div>
    <m-block title="热门推荐">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </m-block>
  </div>
</template>

<script>
import utils from 'common/js/utils'
import { ERR_OK } from 'api/config'
import { channels } from 'pages/config'
import { getRecommendData } from 'api/recommend'
import Slider from 'base/slider/Slider'
export default {
  data: function () {
    return {
      slider: []
    }
  },
  computed: {
    groupedChannels: function () {
      return utils.group(channels, 3)
    }
  },
  created: function () {
    getRecommendData().then(res => {
      console.log(res)
      if (ERR_OK === res.code) {
        this.slider = res.data && res.data.focus
      }
    }).catch(err => {
      console.error(err)
    })
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
  @import '../common/style/var.scss';

  .channels {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 4rem;
    font-size: 2.2rem;
    .channels-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .channels-item {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      margin: 2rem 0;
      width: 14rem;

      .icon{
        margin-right: 1.5rem;
        font-size: 3.5rem;
        color: $primary-color;
      }
    }
  }
</style>
