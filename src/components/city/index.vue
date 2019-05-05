<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList">{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="cityIndex">
                <div v-for="item in cityList">
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="itemList in item.list">{{itemList.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <!--  touchstart 移动端点击事件  按下对象就执行 不建议用 click 移动端上 click事件有触发延时 -->
                <li v-for="(item,index) in cityList" @touchstart="toIndex(index)">{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city",
        data(){
           return{
               cityList:[],
               hotList:[]
           }
        },
        mounted(){
            this.axios.get('/api/cityList').then((res)=>{
                var msg = res.data.msg;
                if (msg === 'ok'){
                    var cites = res.data.data.cities;
                    var {cityList,hotList} = this.setData(cites);
                    this.cityList = cityList;
                    this.hotList = hotList
                }
            })
        },
        methods:{
            setData(cites){
                var cityList = []; // 数据格式 [{index:'A',list:[{nm:'名字',id:'id'}]}]
                var hotList = [];
                for (var i=0;i<cites.length;i++){
                    var first = cites[i].py.substring(0,1).toUpperCase();
                    if (toCom(first)) { // 新建index
                        cityList.push({index:first,list:[{nm:cites[i].nm,id:cites[i].id}]})
                    }else{ //累计添加 index
                        for (var j=0;j<cityList.length;j++){
                            if (cityList[j].index === first){
                                cityList[j].list.push({nm:cites[i].nm,id:cites[i].id})
                            }
                        }
                    }
                    if (cites[i].isHot === 1) {
                        hotList.push({nm:cites[i].nm,id:cites[i].id})
                    }
                }
                cityList.sort((a,b)=>{  // a和d 代表 cityList里面的 2个元素
                    if (a.index < b.index){ // 字母为字符串类型  可以比较大小
                        return -1
                    } else if (a.index > b.index){
                        return 1
                    } else{
                        return 0
                    }
                });
                function toCom(first) {
                    for(var i=0;i<cityList.length;i++){
                        if (cityList[i].index === first){  // 查看 cityList里index 是否有 first
                            return false
                        }
                    }
                    return true
                }
                return {
                    cityList,
                    hotList
                }
            },
            toIndex(index){
                // 功能: 点击 右侧 字母 跳转到左侧字母位置
                //  原理 : 找到 右侧点击  字母的 下表  与左侧 是相对应的
                //         在 左侧 找到 那个 的 offsetTop 位置 (距离有position属性的父级 顶部距离)
                //         利用一整个 div 的 scrollTop  (超出父级元素 多少距离)
                var h2 = this.$refs.cityIndex.getElementsByTagName('h2');
                this.$refs.cityIndex.parentNode.scrollTop = h2[index].offsetTop
            }
        }
    }
</script>

<style scoped>
    #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
    .city_body .city_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_hot ul{}
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    .city_body .city_sort{}
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>