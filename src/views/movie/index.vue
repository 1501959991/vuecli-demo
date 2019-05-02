<template>
    <div id="main">
        <Header myTitle="喵喵电影" title1="这是title"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>大连</span><i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
                    <router-link tag="div" :to="{name:'comingSoon'}" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" :to="{name:'search'}" class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
            <keep-alive>
                <!-- 城市  正在热映 即将上映 搜索 组件的 出口-->
                <router-view></router-view>
            </keep-alive>
        </div>
        <tabBar></tabBar>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import tabBar from '@/components/tabBar';
    export default {
        name: "movie",
        components:{
            Header,
            tabBar
        }
    }
</script>

<style scoped>
    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    .movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}
</style>