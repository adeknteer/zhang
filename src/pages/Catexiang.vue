<template>
  <div id="shop">
    <div class="d0">
      <p>
        <van-icon name="arrow-left" @click="gofan" />
      </p>
    </div>
    <div class="d1">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in detail.pics" :key="index">
          <img :src="item.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="d2">
        <p>{{detail.basicInfo.name}}</p>
        <p>{{detail.basicInfo.characteristic}}</p>
        <div>
            <p>低价<span>￥{{detail.basicInfo.minPrice}}</span></p>
            <p>原价<span>￥{{detail.basicInfo.originalPrice}}</span></p>
            <p>库存￥{{detail.basicInfo.stores}}</p>
        </div>
     </div>
     <van-tabs v-model="active" @change="tab">
        <van-tab  title="商品介绍">
           <div v-html="detail.content" class="d3"></div>
        </van-tab>
         <van-tab  title="商品评价" class="tabs" >
             <ul >
                 <li v-for="(item,index) in pingjia" :key="index">
                     <i class="van-icon van-icon-user-circle-o">
                <!----></i>
                <div>
                    <div>
                        <p class="p1">{{item.goods.goodReputationRemark}}</p>
                        <p class="p2">{{item.goods.goodReputationStr}}</p>
                    </div>
                    <p class="p3">{{item.goods.uid}}</p>
                    <div class="p4">
                        <p>{{item.goods.dateAdd}}</p>
                        <p>选择规格：{{item.goods.property}}</p>
                    </div>
                </div>
               
                 </li>
             </ul>
              
         </van-tab>
 
    </van-tabs>
    <van-popup
  v-model="show"
  closeable
  position="bottom"
  
  >
    <div class="xx">
        <div>
            <img :src="detail.basicInfo.pic" alt="">
            <div>
                <p>{{detail.basicInfo.name}}</p>-
                <p>￥{{detail.basicInfo.minPrice}}</p>
            </div>
        </div>
        <div v-for="(p,index1) in ps" :key="p.id">
            <div>
                <p class="p5">{{p.name}}</p>
                <div class="p6" >
                    <p class="pp" :class="{'active':v.checked}" @click="select(index1,index2)" v-for="(v,index2) in p.childsCurGoods" :key="v.id">{{v.name}}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div class="p7">
            <p>购买数量</p>
             <van-stepper v-model="value" />
        </div>
       <p class="p8" @click="goumai">立即购买</p>
    </div>
  </van-popup>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="go" :badge="$store.getters.nums"/>
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="gocart"/>
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "catexiang",
  data() {
    return {
    //   lists: [],
      detail:{},
       
      list1:"",
      pingjia:[],
      show:false,
      //tanchu:[],
      ps:[],
      value:1,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log(this.$route.params.id);
    var id = this.$route.params.id;
    this.http
      .get("https://api.it120.cc/small4/shop/goods/detail?id=" + id)
      .then(res => {
       // console.log(res);
        //this.lists = res.data.data.pics;
        this.detail=res.data.data
       // this.num = res.data.data.basicInfo
       // this.list1=res.data.data.content
        //this.tanchu=res.data.data
        //console.log(this.list1)
        var arr=this.detail.properties
        
        arr.forEach((item)=>{
            item.childsCurGoods.forEach((a)=>{
                a.checked=false
            })
        })
        this.ps=arr
       // console.log(this.ps)
      });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
      gofan(){
          this.$router.go(-1)
      },
      tab(e){
          console.log(e)
          if(e==1){
              if(this.pingjia.length==0){
                  this.http.get("https://api.it120.cc/small4/shop/goods/reputation?goodsId="+this.$route.params.id).then((res)=>{
                     // console.log(res)
                      if(res.data.msg=="success"){
                          this.pingjia=res.data.data
                      }
                  })
              }
          }
          
      },
      gocart(){
          this.show=true
      },
      select(n1,n2){
          console.log(n1,n2)
          this.ps[n1].childsCurGoods.forEach((item,index)=>{
              if(index==n2){
                  item.checked=true
                  this.$set(this.ps[n1].childsCurGoods,index,item)
              }else{
                  item.checked=false
                  this.$set(this.ps[n1].childsCurGoods,index,item)
              }
          })
      },
      goumai(){
         var a= localStorage.getItem("token")
        //  console.log(a)
        if(a){
            // alert(12121)
            var p0=[]

            this.ps.forEach((item)=>{
                var r=item.childsCurGoods.filter((p)=>{
                    return p.checked
                })
                p0=p0.concat(r)
               // console.log(p0)
            })
            console.log(p0)
            if(p0.length<this.ps.length){
                this.$notify('请选择属性')
                return false
            }
            var obj={
                pic:this.detail.basicInfo.pic,
                name:this.detail.basicInfo.name,
                price:this.detail.basicInfo.minPrice,
                num:this.value,
                checked:false,
                pro:p0,
                id:this.detail.basicInfo.id
            }
            console.log(obj)
            this.$store.commit('addcart',obj);
            this.show=false
        }else{
            this.$router.push("/login")
        }
      },
      go(){
      this.$router.push("/home/cart")
  }
  },
  
};
</script>
<style lang="scss" >
/* @import url(); 引入css类 */
#shop {
  width: 100%;
  min-height: 200%;
  .d0 {
    width: 0.36rem;
    height: 0.36rem;
    padding: 0.03rem;
    border-radius: 50%;
    border: 0.02rem solid #ffffff;
    position: fixed;
    left: 0.1rem;
    top: 0.1rem;
    text-align: center;
    line-height: 0.36rem;
    z-index: 11;
    p {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: white;
      text-align: center;
      i {
        font-size: 0.3rem;
        color: #666;
        margin-top: 0.03rem;
      }
    }
  }
  .d1 {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.d2{
    width: 5rem;
    height: 1.24rem;
    background: #ffffff;
    padding-left: 0.2rem;
    border-bottom: 0.14rem solid #f5f5f5;
    div{
        display: flex;
        margin-top: 0.2rem;
       
    }
}
.d2>p:nth-of-type(1){
    font-size: 0.22rem;
    color: #464646;
    margin-top: 0.25rem;
}
.d2>p:nth-of-type(2){
    font-size: 0.16rem;
    color: #B8B8B8;
    margin-top: 0.16rem;
}
 .d2>div>p:nth-of-type(1){
            font-size: 0.14rem;
            color: red;
            width: 0.9rem;
            span{
                font-size: 0.2rem;
            }
 }
 .d2>div>p:nth-of-type(2){
     font-size: 0.14rem;
     color: #B8B8B8;
     margin-top: 0.06rem;
     width: 3.3rem;
 }
 .d2>div>p:nth-of-type(3){
     font-size: 0.14rem;
    color: #B8B8B8;
    margin-top: 0.06rem;
 }
.d3{
    width: 100%;
    overflow: hidden;
     
}
.img-lazyloaded {
          width: 100%  !important;
          height: 100%  !important;
      }
    
 .tabs{
     ul{
         width: 100%;
         li{
             display: flex;
             height: 1.54rem;
             padding-right: 0 0.2rem;
             border-bottom: 0.01rem solid #e9e9e9;
             i{
                 font-size: 0.8rem;
                 margin-top: 0.18rem;
             }
             div{
                 margin-left: 0.14rem;
             }
         }
     }
 }    
 .tabs>ul>li>div>div:nth-of-type(1){
     display: flex;
     align-items: center;
     margin-top: 0.18rem;
    .p1{
        font-feature-settings: 0.16rem;
    }
    .p2{
        width: 0.48rem;
        height: 0.32rem;
        border-radius: 0.06rem;
        color: white;
        text-align: center;
        line-height: 0.32rem;
        background: #B7282E;
        font-size: 0.16rem;
        margin-left: 0.2rem;
    }
 }
 .p3{
     font-size: 0.16rem;
     margin-top: 0.2rem;margin-left: 0.1rem;
 }
 .p4{
     display: flex;
     margin-top: 0.2rem;
     >p:nth-of-type(1){
         font-size: 0.12rem;
         color: #b2b2b2;
     }
     >p:nth-of-type(2){
         margin-left: 0.2rem;
         color: #b2b2b2;font-size: 0.12rem;
     }
 }
 .p5{
     font-size: 0.16rem;
     margin-left: 0.2rem;
 }
 .p6{
     display: flex;
    //  flex-wrap: wrap;
     >p{
         padding: 0.1rem 0.2rem;
         border-radius: 0.06rem;
         border: 0.01rem solid #b2b2b2;
         margin-top: 0.1rem;
         margin-left: 0.1rem;
     }
 }
 .p7{
     height: 0.98rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 0.2rem;
     p{
        font-size: 0.16rem;
        letter-spacing: 0.01rem; 
     }
 }
 .p8{
     width: 100%;
     height: 0.6rem;
     text-align: center;
     line-height: 0.6rem;
     font-size: 0.22rem;
     color: white;
     background: red;
 }
 .van-popup{
     z-index: 2002;
 }
 .xx{
     >div:nth-of-type(1){
         height: 1.23rem;
         border-bottom: 0.01rem solid #e9e9e9;
         display: flex;
         img{
             width: 0.58rem;
             height: 0.58rem;
             display: block;
             margin-left: 0.2rem;
             margin-top: 0.2rem;
         }
         >div:nth-of-type(1){
             margin-left: 0.16rem;
             width: 3.5rem;
             >p:nth-of-type(1){
                 font-size: 0.17rem;
                 margin-top: 0.3rem;
             }
             >p:nth-of-type(2){
                 font-size: 0.18rem;
                 margin-top: 0.24rem;
                 color: #d00000;
             }
         }
     }
   

 }
 .xx>div:nth-of-type(2){
         padding: 0.3rem 0;
         border-bottom: 0.01rem solid #e9e9e9;
         >div{
            >p:nth-last-of-type{
                font-size: 0.16rem;
                margin-left: 0.2rem;
               
            } 
           
         }
     }
  .pp.active{
      border: 1px solid red;
  }
</style>   


