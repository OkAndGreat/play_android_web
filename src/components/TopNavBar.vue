<template>
    <ul class="top_nav_bar_nav">
        <li class="active" nav_name="home">
            <div>
                <a>首页</a>
            </div>
        </li>
        <li nav_name="square">
            <div>
                <a>广场</a>
            </div>
        </li>
        <li nav_name="nav">
            <div>
                <a>导航</a>
            </div>
        </li>
        <li nav_name="teach">
            <div>
                <a>教程</a>
            </div>
        </li>
        <li nav_name="learn_router">
            <div>
                <a>学习路线</a>
            </div>
        </li>
        <li nav_name="qa">
            <div>
                <a>问答</a>
            </div>
        </li>
        <li nav_name="project">
            <div>
                <a>项目</a>
            </div>
        </li>
        <li nav_name="public">
            <div>
                <a>公众号</a>
            </div>
        </li>
        <li nav_name="project_category">
            <div>
                <a>项目分类</a>
            </div>
        </li>
        <li nav_name="tools">
            <div>
                <a>工具</a>
            </div>
        </li>
    </ul>
</template>

<script>

const TAG = "TopNavBar"
function setNavActiveStatus(router) {
    const topNavBar = document.getElementsByClassName("top_nav_bar_nav")[0]
    const liList = topNavBar.getElementsByTagName('li')
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function () {
            //先把别人干掉
            for (let i = 0; i < liList.length; i++) {
                liList[i].classList.remove('active')
            }
            //再给自己加上
            liList[i].classList.add('active')

            // 下面进行跳转
            const navName = liList[i].getAttribute('nav_name')
            console.log(TAG + ":" + "跳转到" + navName)
            router.replace("/" + navName)
        }
    }
}

export default {
    name: "TopNavBar",
    mounted() {
        console.log(TAG)
        setNavActiveStatus(this.$router)
    }
}
</script>

<style scoped lang="less">
.top_nav_bar_nav {
  display: flex;

  li {
    height: 60px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: solid transparent 3px;

      &:hover {
        border-bottom: solid #276692 3px;
        color: #276692;
      }

      a {
        cursor: pointer;
        display: block;
        height: 60px;
        line-height: 60px;
        color: #276692;
      }
    }
  }

  .active {
    div {
      border-bottom: solid #276692 3px;
    }
  }
}
</style>