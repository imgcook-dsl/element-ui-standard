<template>
  <div class="page">
    <div class="mod1">
      <van-search
        class="block"
        placeholder="搜索商品、分类"
        shape="round"
      ></van-search>
      <img
        class="dian"
        src="https://img.alicdn.com/tfs/TB1iasNB7L0gK0jSZFtXXXQCXXa-45-45.png"
      />
    </div>
    <div class="mod2">
      <div class="block_3">
        <van-swipe class="block_2" autoplay="3000" indicator-color="fff">
          <van-swipe-item
            class="bannerWrap"
            v-for="(item, index) in loopData"
            :key="index"
            ><img
              class="banner"
              src="https://img.alicdn.com/tfs/TB1iq.NB1L2gK0jSZPhXXahvXXa-690-345.png"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <swiper class="row" :options="swiperOption">
      <swiper-slide
        class="block_6"
        v-for="(item, index) in loopData"
        :key="index"
        ><img
          class="smallItem"
          src="https://img.alicdn.com/tfs/TB1oZ3RB4D1gK0jSZFKXXcJrVXa-144-144.png"
        />
        <span class="dragonBoatFestivalWelfare">端午福利</span>
      </swiper-slide>
    </swiper>
    <div class="mod3">
      <div class="block_8">
        <img
          class="jiaxigua"
          src="https://img.alicdn.com/tfs/TB1iKgSB4D1gK0jSZFyXXciOVXa-48-65.png"
        />
        <span class="hotRecommendation">热门推荐</span>
      </div>
      <div class="block_9">
        <span class="viewMore">查看更多</span>
        <img
          class="liveiconput"
          src="https://img.alicdn.com/tfs/TB1aXZOB.T1gK0jSZFrXXcNCXXa-21-38.png"
        />
      </div>
    </div>
    <div class="mod4">
      <div class="itemWrap" v-for="(item, index) in loopData" :key="index">
        <img
          class="item"
          src="https://img.alicdn.com/tfs/TB1hEkRBYY1gK0jSZTEXXXDQVXa-335-335.png"
        />
        <div class="priceWrap">
          <span class="title_2">杭州热销过千十大名茶…</span>
          <span class="rmb">¥</span> <span class="price">168</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliders: [1, 2],
      loopData: [1, 2],
      loopData: [1, 2, 3, 4],
      loopData: [1, 2, 3, 4],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style src="./index.response.css" />
