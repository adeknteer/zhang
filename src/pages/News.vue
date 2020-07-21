<template>
  <div id="">
      <van-nav-bar
        title="专栏详情"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <ul>
            <li>
                <p class="p3">{{ace.title}}</p>
                <img :src="ace.pic" alt="">
                <div class="dd" v-html="ace.content"></div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
name:"news",
data() {
return {
    ace:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.http.get("https://api.it120.cc/small4/cms/news/detail?id="+this.$route.query.id).then((res)=>{
        console.log(res)
        this.ace=res.data.data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    onClickLeft(){
        this.$router.go(-1)
    }
},

}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
ul{
    padding-top: 0.7rem;
    li{
        .p3{
            font-size: 0.3rem;
            color: #333333;
            width: 100%;
            text-align: center;
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;  
        }
        img{
            width: 4.85rem;
            height: 3.13rem;
            display: block;
            margin: 0 auto;
        }
        .dd{
           font-size: 0.2rem;
            color: #333333;
            line-height: 0.48rem;
            text-indent: 2em;
            margin-top: 0.1rem;
            padding: 0 0.15rem;
        }
    }
}
</style>