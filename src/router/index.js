import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Accounting from '../views/Accounting.vue'
import ProductDetail from '../views/ProductDetail'
import User from '../views/User'
import Order from '../components/Order'
import Profile from '../components/Profile'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/detail',
    name: 'Product Detail',
    component: ProductDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/accounting',
    name: 'Accounting',
    component: Accounting
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    children:[
      {
        path:"profile",
        component:Profile
      },
      {
        path:"order",
        component:Order
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
