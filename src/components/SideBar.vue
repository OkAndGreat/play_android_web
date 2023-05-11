<template>
    <div class="side_bar_recommend">
        <div class="recommend_container">
            <div class="recommend_title">推荐</div>
            <ul>
                <li class="active" cid="0">热门博文</li>
                <li cid="440">每日一问</li>
            </ul>
        </div>
        <div class="recommend_category">
            <div class="recommend_title">专题</div>
            <ul>
                <li cid="73">面试相关</li>
                <li cid="78">性能优化</li>
                <li cid="152">framework</li>
                <li cid="460">开源库源码</li>
                <li cid="510">当场分享</li>
            </ul>
        </div>
    </div>
</template>

<script>
const TAG = "SideBar"

function setSideBarStatus(vue) {
    const recommend = document.getElementsByClassName("side_bar_recommend")[0]
    const liList = recommend.getElementsByTagName('li')
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function () {
            //先把别人干掉
            for (let i = 0; i < liList.length; i++) {
                liList[i].classList.remove('active')
            }
            //再给自己加上
            liList[i].classList.add('active')

            const cid = liList[i].getAttribute('cid')

            console.log(TAG + "cid:" + cid)

            //把事件传出去
            vue.$emit('SideBarLiClicked', cid)
        }
    }
}

export default {
    name: "RecommendCom",
    mounted() {
        setSideBarStatus(this)
    }
}
</script>

<style scoped lang="less">
.side_bar_recommend {
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;

  .recommend_container {
    padding-bottom: 2px;
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
        font-size: 15px;
        cursor: pointer;

        line-height: 30px;

        &:hover {
          color: white;
          background-color: #1b93fb;
          border-radius: 3px;
        }
      }
    }
  }

  .recommend_category {
    padding-bottom: 8px;

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
        font-size: 15px;
        cursor: pointer;
        line-height: 30px;

        &:hover {
          color: white;
          background-color: #1b93fb;
          border-radius: 3px;
        }
      }
    }
  }

  .active {
    color: white;
    background-color: #1b93fb;
    border-radius: 3px;
  }
}
</style>