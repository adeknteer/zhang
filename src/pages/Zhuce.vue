<template>
  <div id="zhuce">
      <div>
          <p>新用户注册</p>
          <p>很高兴您将成为商城的会员（注册只需一步）</p>
          <p>
              <input type="text" placeholder="手机号码" v-model="tel">
              <span>必填</span>
              <van-icon name="phone-o" />
          </p>
          <p>
              <input type="password"  v-model="pwd" placeholder="密码" v-show="mi">
              <input type="text"  v-model="pwd" placeholder="密码" v-show="!mi">
              <van-icon name="closed-eye"  v-show="showis" @click="mima"/>
              <van-icon name="eye-o" v-show="!showis" @click="mima"/>
          </p>
          <p>
               <input type="password"   placeholder="密码" v-show="mi">
              <input type="text"   placeholder="密码" v-show="!mi">
              <van-icon name="closed-eye"  v-show="showis" @click="mima"/>
              <van-icon name="eye-o" v-show="!showis" @click="mima"/>
          </p>
          <p>
              <input type="text" placeholder="用户名">
              <van-icon name="contact" />-
          </p>
          <p>
              <input type="text" v-model="pic">
              <img @click="imgsj" :src="imgcode+key" alt="">
          </p>
          <p>
              <select name="" id=""></select>
          </p>
          <p>
              <input type="text" v-model="code">
              <span v-show="huoqu" @click="gettimes">获取验证码</span>
              <span v-show="!huoqu">{{times}}后重发</span>
          </p>
          <p @click="gozhu">立即注册</p>
          <p>已有账号？ 立即登录</p>
      </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import qs from 'qs'
export default {
name:"zhuce",
data() {
return {
    imgcode:"https://api.it120.cc/small4/verification/pic/get?key=",
    key:uuidv4(),
    mi:true,
    huoqu:true,
    times:0,
    tel:"",
    pic:"",
    pwd:"",
    code:"",
    showis:true
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    imgsj(){
        //this.imgcode="https://api.it120.cc/small4/verification/pic/get?key="+uuidv4()
        this.key=uuidv4()
    },
    mima(){
        this.mi=!this.mi
    },
    //获取验证码
    gettimes(){
       // alert(this.tel)

        var data={"mobile":this.tel,picCode:this.pic,key:this.key}
        
        this.http.post("https://api.it120.cc/small4/verification/sms/get",qs.stringify(data)).then((res)=>{
           console.log(res)
        }),

        this.huoqu=false;
        this.times=60;
        var timer=setInterval(()=>{
            this.times--;
            if(this.times<=0){
                this.huoqu=true;
                clearInterval(timer)
            }
        },1000)
    },
    //注册
    gozhu(){
         var data={"mobile":this.tel,code:this.code,pwd:this.pwd}
        
        this.http.post("https://api.it120.cc/small4/user/m/register",qs.stringify(data)).then((res)=>{
            console.log(res)
        })
    }
},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
    #zhuce{
        padding: 0.26rem;
        min-height: 2rem;
        div{
           width: 3.8rem;
           padding: 0 0.44rem;
           min-height: 10rem;
           border: 0.02rem solid #f5f5f5; 
          
        }
    }
     #zhuce>div>p:nth-of-type(1){
               font-size: 0.3rem;
               margin-top: 0.5rem;
           }
     #zhuce>div>p:nth-of-type(2){
               font-size: 0.2rem;
               margin-top: 0.5rem;
               color: #909090;
               margin-bottom: 0.23rem;
           }  
    #zhuce>div>p:nth-of-type(3){
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
        span{
            //display: none;
            color: red;
            font-size: 0.18rem;
        }
        i{
            font-size: 0.22rem;
            color: #d1cfce;
            position: absolute;
            left: 3.3rem;
            top: 0.24rem;
        }
    }  
    #zhuce>div>p:nth-of-type(4){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            background: #f5f5f5;
            font-size: 0.2rem;
        }
        i{
                font-size: 0.22rem;
                color: #d1cfce;
                position: absolute;
                left: 3.3rem;
                top: 0.24rem;
        }
    }  
      #zhuce>div>p:nth-of-type(5){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            background: #f5f5f5;
            font-size: 0.2rem;
        }
        i{
                font-size: 0.22rem;
                color: #d1cfce;
                position: absolute;
                left: 3.3rem;
                top: 0.24rem;
        }
    }  
    #zhuce>div>p:nth-of-type(6){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            background: #f5f5f5;
            font-size: 0.2rem;
        }
        i{
                font-size: 0.22rem;
                color: #d1cfce;
                position: absolute;
                left: 3.3rem;
                top: 0.24rem;
        }
    }  
     #zhuce>div>p:nth-of-type(7){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
        input{
            margin-left: 0.2rem;
            width: 2.6rem;
            height: 0.4rem;
            border: none;
            outline: none;
            background: #f5f5f5;
            font-size: 0.2rem;
        }
        img{
            width: 2rem;
            height: 0.65rem;
            position: absolute;
            right: 0;
            top: 0;
        }
    }  
     #zhuce>div>p:nth-of-type(8){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
    }  
       #zhuce>div>p:nth-of-type(9){
        width: 3.72rem;
        height: 0.66rem;
        border-radius: 0.08rem;
        background: #f5f5f5;
        margin-top: 0.24rem;
        position: relative;
        display: flex;
         align-items: center;
        border: 1px solid #f5f5f5;
         input{
            margin-left: 0.2rem;
            width: 1.7rem;
            height: 0.4rem;
            border: none;
            outline: none;
            font-size: 0.2rem;
            background: #f5f5f5;
        }
        span{
            display: block;
            width: 1.7rem;
            height: 0.65rem;
            border-left: 0.01rem solid #E1E1E1;
            font-size: 0.2rem;
            text-align: center;
            line-height: 0.65rem;
            cursor: pointer;
        }
    }  
       #zhuce>div>p:nth-of-type(10){
        width: 2.91rem;
        height: 0.57rem;
        border-radius: 0.06rem;
        background: linear-gradient(90deg,#5ea6f8,#bb87f6);
        text-align: center;
        line-height: 0.57rem;
        font-size: 0.2rem;
        color:white;
        letter-spacing: 0.06rem;
        margin: 0 auto;
        margin-top: 0.24rem;
    }  
        #zhuce>div>p:nth-of-type(11){
        text-align: center;
        font-size: 0.2rem;
        color:#549ff9;
        margin-top: 0.27rem;
    }  
</style>