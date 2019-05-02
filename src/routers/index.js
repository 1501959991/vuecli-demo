import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './cinema'
import movieRouter from './movie'
import mineRouter from './mine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      cinemaRouter,
      movieRouter,
      mineRouter,
      {
          path: "/*",  //  '/*'代表  随意输入错误的路由 显示movieRouter 组件    '/' 代表 端口号后面 不输入路由   ['/*' 也包括了 '/']
          redirect : movieRouter  //默认显示  movieRouter组件
      }
  ]
})
