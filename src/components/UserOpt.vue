<script>

</script>

<template>
    <div class="userOpt">
        <a class="btn" href="/api">本站开放API</a>
        <a class="btn" href="/api">待办清单</a>
        <a class="btn" href="/api">分享文章</a>
        <a class="btn" href="/api">分享项目</a>
        <a class="btn new" href="/api">本站APP下载</a>
        <a class="btn new" href="/api">问答征集</a>
    </div>

</template>

<style scoped>
.userOpt {
    width: 300px;
    height: 160px;
    padding-right: 10px;
    padding-bottom: 10px;
    background-color: white;
    margin-top: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    border-radius: 3px;

    .btn {
        height: 40px;
        background-color: #3498db;
        cursor: pointer;
        text-align: center;
        border-radius: 3px;
        margin-left: 10px;
        margin-top: 10px;
        color: #fff;
        display: inline-block;
        position: relative;

        &:hover {
            background-color: red;
        }
    }

    .new::before {
        /**
        这里通过
                position: absolute;
        top: -3px;
        left: -2px;
        定位了new 旗帜
        并且通过position: absolute; 让其显性
         */
        position: absolute;
        top: -4px;
        left: -2px;
        z-index: 1;
        line-height: 0px;
        font-size: 12px;
        color: #fff;
        height: 0px;
        border: 7px solid #e64c3b;
        border-right-color: transparent;
        border-radius: 3px;
        content: "New";
        box-shadow: 0px 0.3125rem 0.3125rem -0.3125rem #565656;
    }
}
</style>