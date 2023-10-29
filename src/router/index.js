import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Categories from '../views/Categories.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Shop from '../views/Shop.vue'
import CartPage from '../views/CartPage.vue'
import ShopPage from '../views/ShopPage.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  {
    path: '/category/:id',
    name:'Categories',
    component: Categories
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Products
  },
  {
    path:'/shop/:id',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path:'/shops',
    component: ShopPage
  },
  
  {
    path:'/blogs'
  },
  {
    path:'/news'
  },
   {
    path:'/favorite'
  },
  {
    path: '/shops'
  },
 
  {
    path: '/recent'
  },
  {
    path:'/region/:id'
  },
  {
    path:'/province/:id'
  },
  {
    path:'/cities/:id'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
