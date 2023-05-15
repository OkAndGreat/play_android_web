<template>
    <div class="modal">
        <div class="modal-content">
            <h2 class="title">
                <span class="logintTitle">登录</span>
                <span class="close" @click="onLoginModalCloseClicked">X</span>
            </h2>
            <div class="inputContainer">
                <input class="normal_input" type="text" name="username" placeholder="请输入用户名">
                <input class="normal_input" type="password" name="password" placeholder="请输入密码">
                <p class="ofh">
                    <a class="find_psd" target="_blank" href="/blog/show/2947">忘记密码？</a>
                    <span class="toRegisterDialog">去注册</span>
                </p>
                <div class="loginBtn">登录</div>
            </div>

        </div>
    </div>

</template>

<script>
import bus from '@/mittBus'

export default {
    name: "LoginView",
    data() {
        return {}
    },
    methods: {
        onLoginModalCloseClicked() {
            bus.emit('cancelLoginBtn', {})
        }
    }
}
</script>

<style scoped lang="less">
.modal-content {
  width: 400px;
  height: 290px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;

  .title {
    height: 42px;
    line-height: 42px;
    text-align: left;
    font-size: 16px;
    text-indent: 10px;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;

    .close {
      display: block;
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 10px;
    }
  }

  .inputContainer {
    width: 340px;
    margin: 30px auto 10px;

    .normal_input {
      display: block;
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-indent: 3px;
      outline: none;
      padding: 0;
      border: 1px solid #adadad;
      border-radius: 3px;
      background-color: #fff;
      margin-top: 15px;

      &:first-of-type {
        margin-top: 0px;
      }
    }

    .ofh {
      display: flex;
      justify-content: flex-end;

      .find_psd {
        color: #E64C3B;
        font-size: 14px;
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 5px;
      }

      .toRegisterDialog {
        font-size: 14px;
        color: #3498db;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }

    .loginBtn {
      width: 340px;
      height: 40px;
      line-height: 40px;
      background-color: #3498db;
      text-align: center;
      margin-top: 40px;
      color: white;
      cursor: pointer;
    }
  }


}
</style>