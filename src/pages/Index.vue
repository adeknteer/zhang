<template>
  <div id="">
       <Banner></Banner>
        <Kanjia></Kanjia>
        <Zt></Zt>
        <Rq></Rq>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Kanjia from "../components/Kanjia";
import Zt from "../components/Zt";
import Rq from "../components/Rq";
export default {
name:"index",
 components: { Banner, Kanjia, Zt,Rq },
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>