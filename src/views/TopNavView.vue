<template>
  <div class="top_nav_header">
    <div class="content wrapper">
      <div class="logo">
        <a href=""> <img src="https://www.wanandroid.com/resources/image/pc/logo.png" alt="logo"></a>
      </div>
      <TopNavBar></TopNavBar>
      <div class="user">
        <a href="#" class="login" @click="onLoginClicked">登录</a>
        <a href="#" class="register" @click="onRegisterClicked">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar";

export default {
  name: "TopNavViews",
  methods: {
    onLoginClicked() {
      this.$router.replace('login')
    },
    onRegisterClicked() {
      this.$router.replace('register')
    }
  },
  components: {
    TopNavBar
  }
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

    .user {
      flex: 1;
      text-align: right;
      display: flex;
      justify-content: right;

      a {
        height: 60px;
        line-height: 60px;
        color: #276692;
        margin: 0 10px;
      }

    }
  }


}
</style>