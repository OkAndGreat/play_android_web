<template>
    <div>
        <button @click="showModal">打开弹窗</button>
        <div v-if="isModalVisible" class="modal">
            <div class="modal-content">
                <h2>这是一个弹窗</h2>
                <p>这是弹窗的内容</p>
                <button @click="hideModal">关闭弹窗</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            isModalVisible: false
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true
        },
        hideModal() {
            this.isModalVisible = false
        }
    }
}
</script>

<style scoped lang="less">
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>