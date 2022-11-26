<template>
  <div class="recommend">
    <div class="recommend_container">
      <div class="recommend_title">推荐</div>
      <ul>
        <li>热门博文</li>
        <li>每日一问</li>
      </ul>
    </div>
    <div class="recommend_category">
      <div class="recommend_title">专题</div>
      <ul>
        <li>面试相关</li>
        <li>性能优化</li>
        <li>framework</li>
        <li>开源库源码</li>
        <li>当场分享</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecommendCom"
}
</script>

<style scoped lang="less">
.recommend {
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;

  .recommend_container {
    padding-bottom: 8px;
    border-bottom: solid #e2e2e2 1px;

    .recommend_title {
      color: #276692;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      font-weight: bold;
    }

    ul {
      padding: 0;

      li {
        text-align: center;
        width: 120px;
        height: 30px;
        margin: 5px 0;
        font-size: 14px;
        cursor: pointer;
        color: white;
        line-height: 30px;
        background-color: #1b93fb;
        border-radius: 3px;
      }
    }
  }

  .recommend_category {
    padding-bottom: 8px;
    border-bottom: solid #e2e2e2 1px;

    .recommend_title {
      color: #276692;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      font-weight: bold;
    }

    ul {
      padding: 0;

      li {
        text-align: center;
        width: 120px;
        height: 30px;
        margin: 5px 0;
        font-size: 14px;
        cursor: pointer;
        color: white;
        line-height: 30px;
        background-color: #1b93fb;
        border-radius: 3px;
      }
    }
  }

}
</style>