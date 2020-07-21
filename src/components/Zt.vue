<template>
  <div class="zt">
      <div class="jingxuan">
          <p>精选专题</p>
          <i class="van-icon van-icon-arrow"></i>
      </div>
      <div class="isc">
          <ul>
              <li v-for="(item,index) in list" :key="index" @click="go(item.id)">
                  <img :src="item.pic" alt="">
                  <p class="p1">{{item.title}}</p>
                  <p class="p2">{{item.descript}}</p>
              </li>
          </ul>
      </div>
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
    this.http.get("https://api.it120.cc/small4/cms/news/list").then((res)=>{
        console.log(res)
        this.list=res.data.data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    go(id){
        this.$router.push("/news?id="+id)
    }
},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.zt{
    width: 100%;
        height: 4.6rem;
        border-bottom: 0.14rem solid #f5f5f5;
    .jingxuan{
        height: 0.65rem;text-align: center;
        font-size: 0.22rem;-webkit-box-pack:justify;
        align-items: center;display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        p{
            
            // height: 0.65rem;
            // line-height: 0.65rem;
            // width: 100%;
            // font-size: 0.2rem;
            // border-bottom: 0.01rem solid #e9e9e9;
            // display: flex;
            i{
               font-size: 0.2rem;
            }
        }
    }
    .isc{
        width: calc(100%);
        height: calc(3.78rem);
        overflow: auto;
        //::-webkit-scrollbar {display:none}
        ul{
            width: 22.7rem;
            display: flex;
            li{
                width: 4.42rem;
                height: 2.84rem;
                margin-left: 0.12rem;
                img{
                    width: 4.42rem;
                    height: 2.84rem;
                    // display: block;
                    border-radius: 0.06rem;
                }
                .p1{
                    font-size: 0.18rem;
                    color: #2C2C2C;
                    margin-top: 0.12rem;
                    width: 4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .p2{
                    font-size: 0.14rem;
                    color: #A8A8A8;
                    margin-top: 0.2rem;
                    width: 3.24rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>