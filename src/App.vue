<template>
    <div class="main">
        <TopNavView class="top_nav_bar_nav"></TopNavView>
        <div class="bg">
            <router-view></router-view>
        </div>
        <LoginView class="login" id="login"></LoginView>
        <RegisterView class="register" id="register"></RegisterView>
    </div>
</template>

<script>
/* eslint-disable */
import TopNavView from "@/views/TopNavView";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import bus from '@/mittBus'

const TAG = "App"

function registerLoginAndRegisterEvents() {
    bus.on('onLoginBtnClicked', () => {
        const login = document.querySelector("#login")
        login.style.display = 'flex';
    })
    bus.on('onRegisterBtnClicked', () => {
        const register = document.querySelector("#register")
        register.style.display = 'flex';
    })
    bus.on("cancelLoginBtn", () => {
        const login = document.querySelector("#login")
        login.style.display = 'none';
    })
    bus.on("cancelRegisterBtn", () => {
        const register = document.querySelector("#register")
        register.style.display = 'none';
    })
}

export default {
    name: 'App',
    components: {
        RegisterView,
        LoginView,
        TopNavView
    },
    created() {
        registerLoginAndRegisterEvents()
    }
}
</script>
<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;

  .bg {
    flex: 1;
    background-color: #f4f4f4;
  }

  .login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .register {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

}
</style>
