<template>
    <div id="main">
        <Header myTitle="我的喵喵"></Header>
        <div id="content">
            <login></login>
        </div>
        <tabBar></tabBar>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import tabBar from '@/components/tabBar';
    import login from '@/components/login';
    export default {
        name: "mine",
        components:{
            Header,
            tabBar,
            login
        }
    }
</script>

<style scoped>

</style>