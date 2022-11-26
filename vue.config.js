const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //为了跨域请求
    //see https://www.jianshu.com/p/4e6dac726c54
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.wanandroid.com', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})



