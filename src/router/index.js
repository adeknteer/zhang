import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Cate from '@/pages/Cate'
import Cart from '@/pages/Cart'
import Users from '@/pages/Users'
import News from '@/pages/News'
import Zhuce from '@/pages/Zhuce'
import Login from '@/pages/Login'
import Categoods from '@/pages/Categoods'
import Catexiang from '@/pages/Catexiang'
import Order from '@/pages/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:Home,
        redirect:"/home/index",
        children:[
            {
                path:"index",
                component:Index
            },
            {
                path:"cart",
                component:Cart
            },
            {
                path:"cate",
                component:Cate
            },
            {
                path:"users",
                component:Users
            }
        ]
    },
    {
        path:"/news",
        name:"news",
        component:News
    },
    {
        path:"/zhuce",
        name:"zhuce",
        component:Zhuce
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/categoods",
        name:"categoods",
        component:Categoods
    },
    {
        path:"/catexiang/:id",
        name:"catexiang",
        component:Catexiang
    },
    {
        path:"/Order",
        component:Order
    }
  ]
})
