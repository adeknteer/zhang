<template>
  <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.picUrl" alt="">
            </van-swipe-item>
       </van-swipe>
        <ul>
            <li>
                <img src="../../static/tu1.png" alt="">
                <p>签到</p>
            </li>
            <li>
                <img src="../../static/tu2.png" alt="">
                <p>礼券</p>
            </li>
            <li>
                <img src="../../static/tu3.png" alt="">
                <p>砍价</p>
            </li>
            <li>
                <img src="../../static/tu2.png" alt="">
                <p>专栏</p>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
name:"",
data() {
return {
    banner:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.http.get("https://api.it120.cc/small4/banner/list").then((res)=>{
        //console.log(res)
        this.banner=res.data.data
        
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.banner{
    //height: 4.81rem;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    ul{
        width: 100%;
        height: 1.4rem;
        background: white;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        border-radius: 20% 20% 0 0;
        border-bottom: 0.2rem solid #f5f5f5;
        li{
            width: 25%;
            img{
                width: 0.58rem;
                display: block;
                margin: 0 auto;
            }
            p{
                font-size: 0.26rem;
                margin-top: 0.17rem;
            }
        }
    }
}
</style>