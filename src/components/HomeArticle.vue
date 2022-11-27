<template>
  <div class="article_item" @click="onArticleClicked">
    <div class="info_opt">❤</div>
    <div class="info_art">
      <p>{{ title }}</p>
      <span class="istop">置顶</span>
      <span class="tags" v-if="showTag1">本站发布</span>
      <span class="tags" v-if="showTag2">问答</span>
      <span class="aauthor">作者：{{ author }}</span>
      <span class="achapter">分类：{{ chapter }}</span>
      <span class="aniceData">时间：{{ time }}</span>
    </div>
    <div class="article_more">...</div>
  </div>
</template>

<script>
export default {
  name: "HomeArticle",
  props: {
    // 文章的标题
    title: {
      type: String,
      default: ''
    },
    // 作者名字
    author: {
      type: String,
      default: ''
    },
    chapter: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    tags: {
      type: Array
    }
  },
  methods: {
    onArticleClicked() {
      window.open(this.link)
    }
  },
  computed: {
    showTag1() {
      if (this.tags.length === 0) {
        return false
      }
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].name === '本站发布') return true
      }
      return false
    },
    showTag2() {
      if (this.tags.length === 0) {
        return false
      }
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].name === '问答') return true
      }
      return false
    }
  }
}
</script>

<style scoped lang="less">
.article_item {
  width: 705px;
  display: flex;
  padding: 16px 21px;
  background-color: white;
  border-bottom: solid #e2e2e2 1px;

  .info_opt {
    height: 46px;
    margin-right: 13px;
    line-height: 46px;
    font-size: 18px;
    color: #bfbfbf;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  .info_art {
    span {
      color: #999;
      font-size: 12px;
      margin-right: 8px;
    }

    p {
      color: #2e3135;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 10px;

      &:hover {
        text-decoration: underline;
        color: #1b93fb;
      }
    }

    .istop {
      color: #f56a6b;
      border: 1px solid #f56a6b;
      margin-right: 8px;
      padding: 2px;
    }

    .tags {
      color: #009a61;
      border: 1px solid #009a61;
      margin-right: 8px;
      padding: 2px;
      cursor: pointer;
    }


  }

  .article_more {
    flex: 1;
    text-align: right;
    font-weight: bold;
    font-size: 26px;
    height: 46px;
    margin-right: 8px;
    line-height: 46px;
    color: #767676;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
}
</style>