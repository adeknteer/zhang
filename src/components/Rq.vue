<template>
  <div  class="d1">
          <div>
              <p>人气推荐</p>
              <i class="van-icon van-icon-arrow"></i>
          </div>
        <ul>
            <li v-for="(item,index) in list" :key="item.id" @click="gode(item.id)">
                <img :src="item.pic" alt="">
                <p>{{item.name}}</p>
                <p class="p1">{{item.characteristic}}</p>
                <p>{{item.minPrice}}</p>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
name:"",
data() {
return {
    list:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.http.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
        console.log(res)
        this.list=res.data.data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    gode(id){
        this.$router.push({name:"catexiang",params:{id}})
    }
},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
    .d1{
        width: 100%;
        border-bottom: 0.14rem solid #F5F5F5;
    }
    .d1>div:nth-of-type(1){
        height: 0.65rem;text-align: center;
        font-size: 0.22rem;-webkit-box-pack:justify;
        align-items: center;display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        i{
            font-size: 0.2rem;
        }
    }
    ul{
        width: 100%;
        display: flex;
        padding: 0 0.2rem;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 50%;
            img{
                width: 2.33rem;
                height: 3rem;
                display: block;
            }
        }
    }
    ul>li>p:nth-of-type(1){
        font-size: 0.2rem;
        color: #000000;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .p1{
        font-size: 0.14rem;
        color: #B2B2B2;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.1rem;
    }
    ul>li>p:nth-of-type(3){
        font-size: 0.16rem;
        color: #D00000;
        margin-top: 0.1rem;
    }
</style>