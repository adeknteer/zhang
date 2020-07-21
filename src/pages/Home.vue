<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home/index" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/cate" icon="search">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/cart" icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/users" icon="manager-o">
        用户
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: "home",
 
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.van-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
