export default {
    path: '/movie',
    // () => import('@/views/movie') 按需加载  只有访问 /movie 路径 才会加载 @/views/movie/index.vue 文件
    component: () => import('@/views/movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/city')
        },
        {
            path: 'comingSoon',
            name: 'comingSoon', // 添加name 属性  router-link to的时候  可以直接  :to="{name:'comingSoon'}" 省略书写父级路由
            component: () => import('@/components/comingSoon')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/nowPlaying')
        },
        {
            path: 'search',
            name:'search',
            component: () => import('@/components/search')
        },
        {
            path: '/movie',
            // 访问 /movie 的时候  默认 进入 /movie/comingSoon
            redirect: '/movie/comingSoon'  // 也可以不加 /movie 直接 comingSoon 建议加上 /movie
        }
    ],
}