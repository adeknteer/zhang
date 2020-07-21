import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cart: []
    },
    getters: {
        nums(state) {

            var s = 0;
            state.cart.forEach((item) => {

                s += item.num
            })
            return s
        },
        hj(state){
            var s = 0;
            state.cart.forEach((item) => {
                if(item.checked){
                    s += item.num*item.price
                }
            })
            return s
        },
        select(state){
          var  r = state.cart.every((item)=>{
                return item.checked
            })
            return r
        },
        order(state){
            return state.cart.filter((item)=>{
                return item.checked
            })
        }
    },
    mutations: {
        addcart(state, goods) {
           // console.log(state)
            // findIndex
            var n = state.cart.findIndex((item) => {
                return item.id == goods.id
            });
            console.log(n)
            if (n == -1) {
                state.cart.push(goods)
            } else {
                var cart = state.cart;
                cart[n].num += goods.num
                state.cart = cart
            }

        },
        sel(state,d){
            var cart = state.cart;
            vart[d.index].checked=d.value
            state.cart=cart
        },
        num(state,d){
            var cart = state.cart;
            vart[d.index].num=d.value;
            state.cart=cart
        },
        qx(state,d){
            var cart = state.cart;
            cart.forEach((item)=>{
                item.checked=d
            })
            state.cart=cart
        },
        del(state){
            state.cart=state.cart.filter((item)=>{
                return !item.checked
            })
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()]//会自动保存创建的状态。刷新还在
})