<template>
  <div class="top_nav_header">
    <div class="content wrapper">
      <div class="logo">
        <a href=""> <img src="https://www.wanandroid.com/resources/image/pc/logo.png" alt="logo"></a>
      </div>
      <ul class="nav">
        <li>
          <div>
            <a href="">首页</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">广场</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">导航</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">教程</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">学习路线</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">问答</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">项目</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">公众号</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">项目分类</a>
          </div>
        </li>
        <li>
          <div>
            <a href="">工具</a>
          </div>
        </li>
      </ul>
      <div class="user">
        <div>
          <a href="#" class="login">登录</a>
        </div>
        <div>
          <a href="#" class="register">注册</a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TopNavViews",
  methods: {}
}
</script>

<style scoped lang="less">
.top_nav_header {
  box-shadow: 0 2px 3px 0 rgb(118 118 118 / 20%);

  .content {
    display: flex;
    height: 60px;

    .logo {
      width: 100px;
      height: 60px;
      margin: 0 20px;
      display: flex;
      justify-content: center;

      img {
        margin: 5px 16px;
        width: 68px;
        height: 50px;
      }
    }

    .nav {
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
          }


          a {
            display: block;
            height: 60px;
            line-height: 60px;
            color: #276692;
          }
        }
      }
    }

    .user {
      flex: 1;
      text-align: right;
      display: flex;
      justify-content: right;

      div{
        a {
          height: 60px;
          line-height: 60px;
          color: #276692;
          margin: 0 10px;
        }
      }

    }
  }


}
</style>