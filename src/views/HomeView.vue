<template>
  <div class="home wrapper">

    <div class="left">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="BannerList[0].imagePath" class="d-block w-100" @click="onUrlClicked(BannerList[0].url)"
                 alt="banner">
          </div>
          <div class="carousel-item">
            <img :src="BannerList[1].imagePath" class="d-block w-100" @click="onUrlClicked(BannerList[1].url)"
                 alt="banner">
          </div>
          <div class="carousel-item">
            <img :src="BannerList[2].imagePath" class="d-block w-100" @click="onUrlClicked(BannerList[2].url)"
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

      <div class="content">
        <div class="left">
          <div class="hr" @click="onUrlClicked('https://www.wanandroid.com/blog/show/2949')">站长在线招Android！</div>
          <SideBar @SideBarLiClicked="onSideBarClicked"></SideBar>
        </div>

        <div class="right">
          <div class="article">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoadMore">
              <HomeArticle
                  v-for="item in ArticleList"
                  :key="item.id"
                  :title="item.title"
                  :author="item.author"
                  :chapter="item.chapterName"
                  :link="item.link"
                  :time="item.niceDate"
                  :tags="item.tags"></HomeArticle>
            </van-list>
          </div>
        </div>
      </div>

    </div>
    <div class="right"></div>


  </div>
</template>

<script>
import {getBannerImageList} from "@/network/API";
import {getTopArticle} from "@/network/API";
import {getTreeArticle} from "@/network/API";
import SideBar from "@/components/SideBar";
import HomeArticle from "@/components/HomeArticle";

export default {
  name: "HomeView",
  data() {
    return {
      BannerList: [],
      ArticleList: [],
      cid: Number,
      page: Number,
      // 是否正在加载下一页数据，如果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来之后，千万要记得，把 loading 从 true 改为 false
      loading: false,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把 finished 改成 true
      finished: false
    }
  },
  methods: {
    onUrlClicked(url) {
      window.open(url)
    },
    async initBanner() {
      const {data: res} = await getBannerImageList()
      this.BannerList = res.data
    },
    async initArticles() {
      if (this.cid === 0) {
        const {data: res} = await getTopArticle()
        this.ArticleList = res.data
      }

      const {data: res1} = await getTreeArticle(this.page, this.cid)
      this.ArticleList = [...this.ArticleList, ...res1.data.datas]
    },
    onSideBarClicked(cid) {
      this.cid = cid
      this.page = 0
      this.ArticleList = []
      this.initArticles()
    },
    async onLoadMore() {
      this.page++
      const {data: res} = await getTreeArticle(this.page, this.cid)
      if (res.length === 0) {
        this.finished = true
        return
      }
      this.ArticleList = [...this.ArticleList, ...res.data.datas]
      this.loading = false
    }
  },
  created() {
    this.cid = 0
    this.page = 0
    this.initBanner()
    this.initArticles()
  },
  components: {
    SideBar,
    HomeArticle
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
        cursor: pointer;
      }
    }

    .content {

      display: flex;

      .left {
        width: 140px;
        margin-right: 25px;

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

      .right {

      }
    }


  }


}
</style>