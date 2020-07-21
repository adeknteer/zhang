<template>
  <div id="login">
      <div class="dd">
          <p>登录账号</p>
          <p>虾米 - 严选商城欢迎您</p>
          <p>
              <input autofocus="autofocus" type="text" v-model="tel" placeholder="请输入手机号">
              <van-icon name="phone-o" />
          </p>
          <p>
              <input type="password"  v-model="pwd" placeholder="密码" v-show="mi">
              <input type="text"  v-model="pwd" placeholder="密码" v-show="!mi">
              <van-icon name="closed-eye"  v-show="showis" @click="mima"/>
              <van-icon name="eye-o" v-show="!showis" @click="mima"/>
          </p>
          <div class="deng">
              <a  @click="deng">登录</a>
          </div>
          <p>忘记密码</p>
          <p @click="gozhuce">还没有注册？ 立即注册</p>
      </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
name:"login",
data() {
return {
    mi:true,
    showis:true,
    tel:"",
    pwd:"",
    p1:""
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
     mima(){
        this.mi=!this.mi
    },
    gozhuce(){
        //alert(111)
        this.$router.push("/zhuce")
    },
    deng(){
        var data={"mobile":this.tel,pwd:this.pwd}
        
        this.http.post("https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",qs.stringify(data)).then((res)=>{
            console.log(res)
            if(res.data.msg=="success"){
                localStorage.setItem("token",res.data.data.token)
                this.$router.push("/home/users")
                if(thsi.p1!=""){
                    this.$router.push(this.p1)
                }
            }else{
                alert("用户名或密码不正确")
            }
        })
    }
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>{
            p1:from.path
        })
    }

}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#login{
    padding: 0.26rem;
    .dd{
        width: 3.8rem;
        padding: 0 0.44rem;
        height: 8rem;
        border: 0.02rem solid #f5f5f5;
        border-radius: 0.06rem;
    }
    
}
.deng{
        height: 0.5rem;
        width: 2rem;
        margin-left:0.46rem ;
        font-size: 0.2rem;
        margin-top: 0.3rem;
        a{
            height: 0.5rem;
            width: 2.9rem;
            display: block;
            outline: none;
            padding: 0.2rem;
            color: #fff;
            text-transform: uppercase;
            background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
            box-sizing: border-box;
            text-align: center;
            line-height: 14px;
            font-family: roboto, helvetica;
            font-weight: 200;
            letter-spacing: 1px;
            text-decoration: none;
            -webkit-box-shadow: 0 5px 3px rgba(0,0,0,0.3);
            box-shadow: 0 5px 3px rgba(0,0,0,0.3);
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            border-radius: 5px;
        }
    }
#login>div>p:nth-of-type(1){
    font-size: 0.3rem;
    color: #666;
    margin-top: 0.44rem;
}
#login>div>p:nth-of-type(2){
    font-size: 0.23rem;
    color: #909090;
    margin-top: 0.36rem;
}
#login>div>p:nth-of-type(3){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        margin-top: 0.44rem;
        display: flex;
        align-items: center;
        position: relative;
        background: #f5f5f5;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            font-size: 0.2rem;
            background: #f5f5f5;
        }
        i{
            font-size: 0.22rem;
            color: #d1cfce;
            position: absolute;
            left: 3.3rem;
            top: 0.24rem;
        }
}
#login>div>p:nth-of-type(4){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        margin-top: 0.44rem;
        display: flex;
        align-items: center;
        position: relative;
        background: #f5f5f5;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            font-size: 0.2rem;
            background: #f5f5f5;
        }
        i{
            font-size: 0.22rem;
            color: #d1cfce;
            position: absolute;
            left: 3.3rem;
            top: 0.24rem;
        }
}
#login>div>p:nth-of-type(5){
    font-size: 0.16rem;
    color: #989898;
    width: 100%;
    text-align: center;
    margin-top: 0.36rem;
}
#login>div>p:nth-of-type(6){
    font-size: 0.2rem;
    color: #549ff9;
    width: 100%;
    text-align: center;
    margin-top: 0.38rem;
}
</style>