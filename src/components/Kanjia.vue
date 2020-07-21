<template>
  <div class="kanjia">
    <div class="kk">
      <p>全民砍价<i class="van-icon van-icon-arrow"></i></p>
      
    </div>
    <ul>
        <van-loading v-if="loading"></van-loading>
      <li v-for="(item, index) in kanjia" :key="index" v-else>
        <div class="uu">
          <img :src="item.pic" alt="" />
          <div class="ll">
            <p class="pp">{{ item.name }}</p>
            <p class="ppp">{{ item.characteristic }}</p>
            <ol class="oll">
                <li class="li1">
                    <p>{{item.minPrice}}</p>
                    <p>低价</p>
                </li>
                <li class="li1">
                    <p>{{item.originalPrice}}</p>
                    <p>原价</p>
                </li>
                <li class="li1">
                    <p>{{item.stores}}件</p>
                    <p>限量</p>
                </li>
            </ol>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      kanjia: [],
      loading:true
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.http
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        console.log(res);
        this.kanjia = res.data.data.goodsMap;
        this.loading=false
      });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.kanjia {
  width: 100%;

  border-bottom:0.14rem solid #f5f5f5;
  .kk {
    font-size: 0.22rem;
    //display: -webkit-box;
    display: flex;
    //-webkit-box-pack: justify;
    justify-content: space-around;
    //padding: 0.2rem;
    align-items: center;
    text-align: center;
    height: 0.65rem;
    border-bottom: 1px solid #e9e9e9;
    height: 0.65rem;
    line-height: 0.65rem;
  }
}
ul {
  li {
    height: 1.7rem;
    width: 100%;
    .uu {
      display: flex;
      padding: 0.1rem;
      //border-bottom: 0.01rem solid #e9e9e9;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.06rem;
        //display: block;
      }
      .ll {
        margin-left: 0.14rem;
        width: 60%;
        .pp{
            font-size: 0.2rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
        }
        .ppp{
            font-size: 0.17rem;color: #b2b2b2;white-space: nowrap;text-overflow: ellipsis;
            overflow: hidden;margin-top: 0.1rem;
        }
        .oll{
            display: flex;
            li{
                margin-top: 0.5rem;
                width: 0.5rem;
                text-align: center;
            }
            .li1{
                margin-right: 0.2rem;
                p{
                    height: 0.2rem;
                }
            }
        }
      }
    }
  }
}
</style>
