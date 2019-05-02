export default {
    path:'/cinema',
//   () => import('@/views/cinema') 按需加载 只有 访问 /cinema 路径  才会加载 @/views/cinema/index.vue 文件
    component: () => import('@/views/cinema')
}