<template>
  <div id="categoods">
      <van-nav-bar
        title="分类商品"
        left-arrow
        :border='f'
        @click-left="onClickLeft"
        />
        <div>
            <ul v-if="list.length!=0">
                <li v-for="(item,index) in list" :key="index" @click="goxiang(item.id)">
                    <img :src="item.pic" alt="">
                    <p>{{item.name}}</p>
                    <p>￥{{item.originalPrice}}</p>
                </li>
            </ul>
            <van-empty v-else image="search" description="暂时没有商品" />
        </div>
  </div>
</template>

<script>
export default {
name:"categoods",
data() {
return {
    f:false,
    list:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.http.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
        console.log(res)
        if(res.data.msg=="success"){
            this.list=res.data.data.filter((item)=>{
                return item.categoryId==this.$route.query.cid
            })
        }
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    onClickLeft(){
        this.$router.go(-1)
    },
    goxiang(id){
        //console.log(id)
        this.$router.push({name:"catexiang",params:{id}})
    }
},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#categoods{
    .van-nav-bar{
        .van-icon{
             color: #000;
        }
    }
    div{
        width: 100%;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 49%;
                height: 2.4rem;
                padding: 0.01rem;

                img{
                    width:100%;
                    height: 2rem;
                }
            }
        }
    }
}
    
</style>