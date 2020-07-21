<template>
  <div id>
    <div id="header">
      <i class="van-icon van-icon-arrow-left">
        <!---->
      </i>
      <p>确认订单</p>
      <p></p>
    </div>
    <div class="cont">
        <div class="conthead">
            <p><van-icon name="plus" /></p>
            <div>新增收货地址</div>
            <van-icon name="arrow" />
        </div>
        <hr>
        <p class="pp">商品列表</p>
        <ul class="uu">
            <li v-for="item in $store.getters.order" :key="item.id">
                <img :src="item.pic" alt="">
                <div class="list1">
                    <p class="p1">{{item.name}}</p>
                    <p  class="p2">
                        <span v-for="p in item.pro" :key="p.id">{{p.name}}</span>
                    </p>
                </div>
                <div class="list2">
                    <p class="p3">￥{{item.price}}</p>
                    <p class="p4">x{{item.num}}</p>
                </div>
            </li>
        </ul>
        <div class="pei">
            <p>配送方式</p>
            <p>快递</p>
        </div>
        <div class="bei">
            <label for="">备注</label>
            <input type="text" placeholder="如需备注请输入">
        </div>
        <p class="kong"></p>
        <div class="jine">
            <p class="p5">商品金额</p>
            <p class="p6">￥{{$store.getters.hj}}</p>
        </div>
        <p class="kong"></p>
    </div>
    <div class="foot">
        <p class="p7">合计：￥{{$store.getters.hj}}</p>
        <p class="p8">提交订单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
        add:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      //console.log(localStorage.getItem("token"))
      this.http.get("https://api.it120.cc/small4/user/shipping-address/default?token="+localStorage.getItem("token")).then((res)=>{
          console.log(res)
      })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#header{
    display: flex;
    padding: 0 0.3rem;
    width: 4.6rem;
    height: 0.76rem;
    background: white;
    z-index: 1;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    i{
        position: relative;
        display: inline-block;
        font: normal normal normal 14px/1 vant-icon;
        text-rendering: auto;
    }
}
.cont{
    padding-top: 0.76rem;
    padding-bottom: 0.7rem;
    .conthead{
        display: flex;
        align-items: center;
        height: 1.1rem;
        padding: 0 0.2rem;
        p{
            width: 0.44rem;
            height: 0.44rem;
            border-radius: 0.06rem;
            
            background: #3283f9;
            i{
                text-align: center;
                display: block;
                margin-top: 0.1rem;
                color: white;
            }
        }
        div{
            width: 4.13rem;
            height: 0.58rem;
            margin-left: 0.32rem;
            margin-top: 0.36rem;
        }
        i{
            font-size: 0.24rem;
            color: #dbdadf;
        }
    }
}
.pp{
    height: 0.65rem;
    padding: 0 0.2rem;
    line-height: 0.65rem;
    font-size: 0.16rem;
    border-top: 0.13rem solid #f5f5f5;
    border-bottom: 2px solid #e8e8e8;   
}
.uu{
    margin: 0;
    padding: 0;
    li{
        height: 1.53rem;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        img{
            width: 1.12rem;
            height: 1.12rem;
            display: block;
            margin-left: 0.2rem;
        }
        .list1{
            margin-left: 0.12rem;
            width: 3.06rem;
            height: 1.12rem;
            .p1{
                font-size: 0.18rem;
                margin-top: 0.1rem;
            }
            .p2{
                font-size: 0.18rem;
                margin-top: 0.55rem;
                color: #999;
            }
        }
        .list2{
            height: 1.34rem;
            width: 0.3rem;
            .p3{
                font-size: 0.18rem;
                margin-top: 0.2rem;
            }
            .p4{
                font-size: 0.18rem;
                margin-top: 0.6rem;
                margin-left: 0.09rem;
                color: #999;
            }
        }
    }
}
.pei{
    height: 0.6rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    border-bottom: 0.01rem solid #e5e5e5;
    align-items: center;
}
.bei{
    height: 0.59rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    label{
        font-size: 0.18rem;
    }
    input{
        width: 3.1rem;
        height: 0.2rem;
        font-size: 0.18rem;
        color: #333;
        margin-left: 0.76rem;
        border: none;
    }
}
.kong{
    width: 100%;
    height: 0.1rem;
    background: red;
    transition: all 1s;
    margin: 0 auto;
}
.jine{
    height: 0.6rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .p5{
        font-size: 0.18rem;
    }
}
.foot{
    width: 100%;
    background: white;
    height: 0.69rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .p7{
        font-size: 0.2rem;
        color: #d00000;
        line-height: 0.69rem;
        margin-left: 2rem;
    }
    .p8{
        width: 1.73rem;
        height: 0.69rem;
        background: #b7282e;
        color: white;
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.69rem;
    }
}
</style>