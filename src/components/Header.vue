<template>
    <div class="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
          <div class="humberger__menu__logo">
              <a href="#"><img src="img/logo.png" alt=""></a>
          </div>
          <div class="humberger__menu__cart">
              <ul>
                  <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                  <li><a href="#"><i class="fa fa-sho   pping-bag"></i> <span>{{cart.count}}</span></a></li>
              </ul>
              <div class="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <div class="humberger__menu__widget">
              <div class="header__top__right__language">
                  <img src="img/language.png" alt="">
                  <div>English</div>
                  <span class="arrow_carrot-down"></span>
                  <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                  </ul>
              </div>
              <div class="header__top__right__auth">
                <router-link to="/login"><i class="fa fa-user"></i> Login</router-link>
              </div>
          </div>
          <nav class="humberger__menu__nav mobile-menu">
              <ul>
                  <li class="active"><a href="">Home</a></li>
                  <li><a href="/shops">Shop</a></li>
                  <li><a href="#">Pages</a>
                      <ul class="header__menu__dropdown">
                          <li><a href="./shop-details.html">Shop Details</a></li>
                          <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                          <li><a href="./checkout.html">Check Out</a></li>
                          <li><a href="./blog-details.html">Blog Details</a></li>
                      </ul>
                  </li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
              </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div class="header__top__right__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-pinterest-p"></i></a>
          </div>
          <div class="humberger__menu__contact">
              <ul>
                  <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                  <li>Free Shipping for all Order of $99</li>
              </ul>
          </div>
      </div>
      <!-- Humberger End -->

      <!-- Header Section Begin -->
      <header class="header">
          <div class="header__top">
              <div class="container">
                  
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-3">
                      <div class="header__logo">
                          <a href="">
                            
                            <img :src="getFullImageUrl('/img/logo/logow.bmp')" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <nav class="header__menu">
                          <ul>
                              <li class="active"><a href="">Home</a></li>
                              <li><a href="/shops">Shop</a></li>
                              <li><a href="#">Pages</a>
                                  <ul class="header__menu__dropdown">
                                      <li><a href="./shop-details.html">Shop Details</a></li>
                                      <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                      <li><a href="./checkout.html">Check Out</a></li>
                                      <li><a href="./blog-details.html">Blog Details</a></li>
                                  </ul>
                              </li>
                              <li><a href="./blog.html">Blog</a></li>
                              <li v-if="loggedIn"><a href="./contact.html">Contact</a></li>
                              <li v-if="isLoggedIn"><a href="#">My Account</a>
                            <ul class="header__menu__dropdown">
                                <li><a href="/front/account">Manage My Account</a></li>
                                <li><a href="/front/account#recent">My Orders</a></li>
                                <li><a href="/front/reviews">My Reviews</a></li>
                                <li><a href="/front/recent">Recently viewed</a></li>
                                <li><a href="/front/cancellation">My Cancellations</a></li>
                                <li><a @click="logOut">Logout</a></li>
                            </ul></li>
                              <li v-else><router-link to="/login">Login</router-link></li>
                          </ul>
                      </nav>
                  </div>
                  <div class="col-lg-3">
                      <div class="header__cart">
                          <ul>
                              <li><a href="#"><i class="fa fa-heart"></i> <span>{{ wishcount }}</span></a></li>
                              <li><router-link to="/cart"><i class="fa fa-shopping-bag"></i> <span>{{cartcount }}</span></router-link></li>
                              
                          </ul>
                          <!-- <div class="header__cart__price">item: <span>$150.00</span></div> -->
                      </div>
                  </div>
              </div>
              <div class="humberger__open">
                  <i class="fa fa-bars"></i>
              </div>
          </div>
      </header>
      <!-- Header Section End -->

      <!-- Hero Section Begin -->
      <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>Categories</span>
                        </div>
                        <ul>
                            <li v-for="category in categories"> 
                                <router-link :to="`/category/${encodeId(category.name)}`">{{category.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="hero__search">
    <div class="hero__search__form">
        <form action="/front/search" method="get">

            <input type="text" name="query" placeholder="What do yo u need?">
            <button type="submit" class="site-btn">SEARCH</button>
        </form>
    </div>
    <div class="hero__search__phone">
        <div class="hero__search__phone__icon">
            <a v-bind:href="'sms:' + info.phone"><i class="fa fa-phone"></i></a>
        </div>
        <div class="hero__search__phone__text">
            <h5>{{info.phone}}</h5>
            <span>support 24/7 time</span>
        </div>
    </div>
</div>
            </div>
        </div>
    </section>

    
    </template>

<script>

import axios from 'axios';
export default {
    data(){
        return{
            cart:"",
            categories:[],
            secret: 'Chr0x!zHuiD31',
            info:[],
            baseUrl: 'https://agriventures.tech/',
            cartcount: "",
            wishcount: "",
        }
    },
    computed: {
    isLoggedIn() {
      return sessionStorage.getItem("loggedIn") === "true";
    },
  },
    mounted(){
        this.getCategories();
        this.findUser();
    },
    methods:{
        async findUser(){
          try{
                const users = await axios.get(`/api/getUser/${sessionStorage.getItem("jwt")}`);
                this.cartcount = users.data.cart.count;
                this.wishcount = users.data.wish.count;
                // console.log("heto " +this.cartcount);
          } catch(error){
            console.log(error);
          } 
        },
      logOut() {
        // sessionStorage.setItem("loggedIn", false);
            sessionStorage.removeItem("loggedIn");
            sessionStorage.removeItem("jwt");

              window.location.reload();

        },  
         getFullImageUrl(image){
            return this.baseUrl + image;
        },
          encodeId(id) {
        const combinedValue = id + this.secret;
        return btoa(combinedValue);
        },
      async getCategories(){
        try{
            const tio = await axios.get('gcat');
            const siteInfo = await axios.get('api/getInfo');
            this.info = siteInfo.data;
            this.categories = tio.data;
        }catch(error){
            console.log(error);
        }
        }
    },
  name: 'HomeView',
  components: {}
}
</script>
