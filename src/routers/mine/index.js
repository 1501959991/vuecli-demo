export default {
    path:'/mine',
    //   () => import('@/views/mine') 按需加载  只有访问 /mine 路径时 才会加载 @/views/mine/index.vue 文件
    component: () => import('@/views/mine')
}