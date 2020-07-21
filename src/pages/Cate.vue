<template>
  <div id="cate">
    <p class="head">
      <input
        type="text"
        placeholder="回车搜索商品"
        v-model="keyword"
        @keydown.enter="add()"
      />
    </p>
    <div>
      <ol>
        <li class="fired" @click="all" :class="{ active: n == 0 }">所有分类</li>
        <li
          class="fired"
          :class="{ active: index + 1 == n }"
          v-for="(item, index) of cate1"
          :key="item.id"
          @click="gochild(item.id, index + 1)"
        >
          {{ item.name }}
        </li>
      </ol>
      <div class="dd">
        <ul>
          <li class="lil" v-for="item of cate3" :key="item.id" @click="gocategoods(item.id)">
            <img :src="item.icon" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cate",
  data() {
    return {
      cate1: [], //左侧分类导航
      cate2: [],
      cate3: [],
      n: 0,
      keyword: "",
      list: []
    };
  },
  methods: {
    async getdata() {
      var a = await this.http.get(
        "https://api.it120.cc/small4/shop/goods/category/all"
      );
      console.log(a);
      if (a.data.msg == "success") {
        var a1 = a.data.data.filter(item => {
          return item.level == 1;
        });
        console.log(a1);
        this.cate1 = a1;
        this.cate2 = a.data.data;
        this.list = a.data.data;
      }
    },
    gochild(id, index) {
      //alert(id)
      var a2 = this.cate2.filter(item => {
        return item.pid == id;
      });
      console.log(a2);
      this.cate3 = a2;
      this.n = index;
    },
    all() {
      this.cate3 = this.cate2;
      this.n = 0;
    },
    gocategoods(id){
        this.$router.push("/categoods?cid="+id)
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getdata();
  },
  computed: {
    // add() {
    //   if (!this.keyword) {
    //     return this.list.filter(item => {
    //       return item.name.includes(this.keyword);
    //     });
    //   }
    // }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#cate {
  p {
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem soli #f3f3f3;
    display: flex;
    align-items: center;
    input {
      width: 3.47rem;
      height: 0.35rem;
      background: #f5f5f5;
      border: none;
      border-radius: 0.2rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;
    }
  }
  div {
    display: flex;
    ol {
      width: 1.27rem;
      border-right: 0.01rem solid #e9e9e9;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0.51rem;
      overflow: auto;
      background: white;
      z-index: 1;
      li {
        width: 1.27rem;
        height: 0.5rem;
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.5rem;
        margin-top: 0.1rem;
      }
      .fired.active {
        border-left: 0.03rem solid red;
        color: red;
      }
    }
  }
}
.dd {
  position: fixed;
  left: 1.27rem;
  top: 0.51rem;
  overflow: auto;
  //height: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 3.72rem;
    text-align: center;
    padding: 0 0.1rem;
    li {
      width: 33%;
      margin-top: 0.1rem;
      img {
        width: 1.1rem;
        height: 1.1rem;
        //display: block;
      }
      p {
        display: flex;
        font-size: 0.16rem;
        color: #3e4561;
        margin-top: 0.05rem;
        justify-content: center;
        // text-align: center;
        // display: -webkit-box;
      }
    }
  }
}
</style>
