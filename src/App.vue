<template>
  <div class="main">
    <TopNavView class="nav"></TopNavView>
    <div class="bg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNavView from "@/views/TopNavView";

export default {
  name: 'App',
  components: {
    TopNavView
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

}
</style>
