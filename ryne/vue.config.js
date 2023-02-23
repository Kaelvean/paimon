const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false,               //自动打开浏览器并转到主页
    host: '0.0.0.0',
    port: 8087,
    proxy: {                   //设置代理
      '/api': {              //设置拦截器  拦截器格式:斜杠+拦截器名字，名字可以自己定
        target: 'http://localhost:8089', //代理的目标地址
        changeOrigin: true,              //是否设置同源，输入是的
        pathRewrite: {                   //路径重写
          '^/api': ''                  //选择忽略拦截器里面的内容
        }
      }
    }
  }
})
