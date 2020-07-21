<template>
  <div class="gg">
      <div class="dd">
          <p v-show="!flag" @click="bianji">编辑</p>
          <p v-show="flag" @click="bianji">完成</p>
          <p>购物车</p>
          <p></p>
      </div>
    
      <ul>
        <li v-for="(item,index) in list" :key="item.id">
          <p class="po"><van-checkbox v-model="item.checked" @click="check(index)"></van-checkbox></p>
          <img :src="item.pic" alt="">
          <div>
              <p>{{item.name}}</p>
              <p>
                  <span v-for="p in item.pro" :key="p.id">{{p.name}}</span>
              </p>
              <div class="pc">
                  <p>￥{{item.price}}</p>
                  <span><van-stepper v-model="item.num" @change="ch(index)"/></span>
              </div>
          </div>
        </li>
      </ul>
      <div id="place">
        <van-checkbox v-model="ss" checked-color="#f00" >全选</van-checkbox>
        <p>合计: ￥{{$store.getters.hj}}</p>
        <p v-show="!edit" @click="xiadan">下单</p>
        <p class="shan" v-show="edit" @click="del">删除</p>
      </div>
   
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      checked: true,
      flag:false,
      edit:false
      
    };
  },
  computed: {
    ...mapState({
      list: state => state.cart
    }),
    ss:{
        get:function(){
            return this.$store.getters.select
        },
        set:function(v){
            //alert(v)
            this.$store.commit("qx",v)
        }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
      check(n){
         console.log(this.list[n].checked) 
         this.$store.commit("sel",{index:n,value:this.list[n].checked})
      },
      ch(n){
      this.$store.commit("num",{index:n,value:this.list[n].num})
  }, 
  bianji(){
     console.log(11)
     this.flag=!this.flag
     this.edit=!this.edit
 },
 del(){
     this.$store.commit("del")
 },
 xiadan(){
     this.$router.push("/order")
 }
  },
 
 
};
</script>
<style lang="scss" >
/* @import url(); 引入css类 */
.gg {
  overflow: hidden;
}
.dd{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.56rem;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 0.13rem;
    font-size: 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 123;
    >p:nth-of-type(1){
        color: red;
    }
    >p:nth-of-type(2){
        color: red;
    }
}
.item {
  height: 100px;
  width: 100%;
  position: relative;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  .del {
    width: 60px;
    height: 100px;
    background: #f00;
    position: absolute;
    right: 0;
  }
}
#place {
  height: 0.68rem;
  border-top: 0.01rem solid #e9e9e9;
  border-bottom: 0.01rem solid #e9e9e9;
  display: flex;
  align-items: center;
  background: white;
  z-index: 1;
  justify-content: space-between;
  padding-left: 0.16rem;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0.87rem;
  > div {
    width: 2.1rem;
  }
  > p:nth-of-type(1) {
    font-size: 0.18rem;
    color: #d00000;
  }
  > p:nth-of-type(2) {
    width: 1.66rem;
    height: 0.68rem;
    font-size: 0.2rem;
    color: white;
    text-align: center;
    line-height: 0.68rem;
    background: #d00000;
  }
}
.shan {
  width: 1.66rem;
  height: 0.68rem;
  font-size: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.68rem;
  background: #d00000;
}
ul{
    padding-top: 0.57rem;
    width: 5.2rem;
    overflow: hidden;
    li{
        height: 1.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //padding-left: 0.1rem;
        //position: relative;
        transition: all .5s;
        .po{
            width: 0.3rem;
            margin-right: 0.6rem;
        }
        img{
            width: 1.1rem;
            height: 1.1rem;
        }
        div{
            margin-left: 0.24rem;
            width: 3.09rem;
            height: 1.1rem;
          
        }
    }
}
ul>li>div>p:nth-of-type(1){
    font-size: 0.18rem;
}
ul>li>div>p:nth-of-type(2){
    font-size: 0.14rem;
    margin-top: 0.16rem;
    color: #b2b2b2;
}
.pc{
    display: flex;
    margin-top: 0.17rem;
    width: 3.09rem;
    justify-content: space-between;
    span{
          margin-left: 0.8rem;
    }
}
.pc>p{
    color: red;
    font-size: 0.18rem;
    margin-top: 0.2rem;
}
</style>