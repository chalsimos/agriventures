<template>
    <div>
    <footer class="footer spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer__about">
                    <div class="footer__about__logo">
                        <a href="./index.html"><img src="img/logo/logw.bmp" alt=""></a>
                    </div>
                    <ul>
                        <li>Address: {{ info.address }}</li>
                        <li>Phone: {{ info.phone }}</li>
                        <li>Email: {{ info.email }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div class="footer__widget">
                    <h6>Useful Links</h6>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Our Shop</a></li>
                        <li><a href="#">Secure Shopping</a></li>
                        <li><a href="#">Delivery infomation</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Our Sitemap</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Innovation</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="footer__widget">
                    <h6>Join Our Newsletter Now</h6>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form action="/front/subscribe">
                        <input type="text" placeholder="Enter your mail" name="email">
                        <button type="submit" class="site-btn">Subscribe</button>
                    </form>
                    <div class="footer__widget__social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="footer__copyright">
                    
		
<div class="footer__copyright__payment">
                      <img :src="getFullImageUrl('img/logo/minsu.png')" width="50">
                      <img :src="getFullImageUrl('img/logo/dar.jpg')" width="70">
                      <img :src="getFullImageUrl('img/logo/dict.png')" width="50">
                      <img :src="getFullImageUrl('img/logo/om.png')" width="50">
                      <img :src="getFullImageUrl('img/logo/da.png')" width="50">
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
</template>
<script>
import axios from 'axios';

export default{
    name: "Footer",
    data(){
        return{
            info:[],
            baseUrl: 'https://agriventures.tech/',
        }
    },
    mounted(){
        this.getDar();
    },
    methods:{
        getFullImageUrl(image){
            return this.baseUrl + image;
        },
        async getDar(){
            try{
                const tio = await axios.get('api/getInfo');
                this.info = tio.data;
            }catch(error){

            }
        },
    }
}
</script>