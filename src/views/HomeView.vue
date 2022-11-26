<template>
  <div class="home wrapper">

    <div class="left">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="BannerList[0].imagePath" class="d-block w-100" @click="onBannerImgClicked(BannerList[0].url)"
                 alt="banner">
          </div>
          <div class="carousel-item">
            <img :src="BannerList[1].imagePath" class="d-block w-100" @click="onBannerImgClicked(BannerList[1].url)"
                 alt="banner">
          </div>
          <div class="carousel-item">
            <img :src="BannerList[2].imagePath" class="d-block w-100" @click="onBannerImgClicked(BannerList[2].url)"
                 alt="banner">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="left">
        <div class="hr" @click="onHrClicked">站长在线招Android！</div>
        <recommend-com></recommend-com>
      </div>

      <div class="right">

        <div class="article"></div>

      </div>
    </div>
    <div class="right"></div>


  </div>
</template>

<script>
import {getBannerImageList} from "@/network/API";
import RecommendCom from "@/components/RecommendCom";

export default {
  name: "HomeView",
  data() {
    return {
      BannerList: []
    }
  },
  methods: {
    onHrClicked() {
      window.open('https://www.wanandroid.com/blog/show/2949')
    },
    async initBanner() {
      const {data: res} = await getBannerImageList()
      console.log(res)
      this.BannerList = res.data
    }
  },
  created() {
    this.initBanner()
  },
  components: {
    RecommendCom
  }
}
</script>

<style scoped lang="less">
.home {
  display: flex;
  margin-top: 30px;

  .left {
    width: 870px;

    .carousel {
      height: 320px;
      margin-bottom: 20px;

      img {
        height: 320px;
      }
    }

    .left {
      width: 140px;

      .hr {
        cursor: pointer;
        height: 30px;
        background-color: #fffadd;
        color: #ad8b84;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #eadab8;
        border-radius: 3px;
        margin-bottom: 20px;
      }


    }

  }

  .right {

  }

}
</style>