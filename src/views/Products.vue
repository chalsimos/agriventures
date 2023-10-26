<template>
    <Header />
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large animated-image"
                                :src="getFullImageUrl(product.p_image)" alt="" :class="{ 'animate': animateImage }">
                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                            <img data-imgbigurl="/img/product/details/product-details-2.jpg"
                                src="/img/product/details/thumb-1.jpg" alt="">
                            <img data-imgbigurl="/img/product/details/product-details-3.jpg"
                                src="/img/product/details/thumb-2.jpg" alt="">
                            <img data-imgbigurl="/img/product/details/product-details-5.jpg"
                                src="/img/product/details/thumb-3.jpg" alt="">
                            <img data-imgbigurl="/img/product/details/product-details-4.jpg"
                                src="/img/product/details/thumb-4.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{{product.p_name}}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">{{product.p_price}}</div>
                        <p>{{ product.p_description }}</p>
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="text" :value="`${product.minimum}`">
                                </div>
                            </div>
                        </div>
                        <a @click="AddToCart" class="primary-btn">ADD TO CARD</a>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                                <div class="alert" v-if="showAlert">{{ alertMessage }}</div>
                            <li><b>Shop: </b><router-link :to="`/shop/${encodeId(product.storeID)}`"><span>{{ product.name}}</span></router-link></li>
                           <li><b>Category: </b><span> {{product.p_category}}</span></li>
                            <li><b>Availability</b> <span v-text="availability"></span></li>
                            <li><b>Stocks</b><span>{{ product.p_quantity + product.ptype }}</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a @click="shareOnFacebook"><i class="fa fa-facebook"></i></a>
                                    <a @click="shareOnTwitter"><i class="fa fa-twitter"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Reviews <span>({{count.count}})</span></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>{{product.p_description}}</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>{{product.p_description}}</p>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">

                                    <h6>Reviews</h6>
                                    <hr>
                                    <li v-for="comment in comments">{{comment.username}} <br> {{comment.rt}} <br> {{comment.comment}} <br> <em>{{comment.created_at}} </em></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>
<script>
import Header from '@/components/Header.vue';
// export const head  = new Header();
import axios from 'axios';
export default{
    
    data(){
        return{
            baseUrl: 'https://agriventures.tech/',
            product:[],
            comments:[],
            count:'',
            secret: 'Chr0x!zHuiD31',
            qty:"",
            showAlert: false,
            alertMessage: "",
        }
    },
    mounted(){
        this.loadScripts();
        this.getProductInfo();
    },
    computed:{
         availability: function () {
            return this.product.p_quantity > 0 ? 'In Stock' : 'Out of Stock';
        },
        currentUrl: function () {
            return window.location.href;
        },
    },
    methods:{
         shareOnFacebook: function () {
            var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + this.currentUrl;
            window.open(facebookUrl, 'popup', 'width=1200,height=600');
        },
        shareOnTwitter: function () {
            var twitterUrl = 'https://twitter.com/share?hashtags=AgriVentures&text=' + this.currentUrl;
            window.open(twitterUrl, 'popup', 'width=1200,height=600');
        },
        getFullImageUrl(image){
            return this.baseUrl + image;
        },
        encodeId(id) {
        const combinedValue = id + this.secret;
        return btoa(combinedValue);
        },
        loadScripts() {
      const scriptUrls = [
            '/js/jquery-3.3.1.min.js',
            '/js/bootstrap.min.js',
            '/js/jquery.nice-select.min.js',
            '/js/jquery-ui.min.js',
            '/js/jquery.slicknav.js',
            '/js/mixitup.min.js',
            '/js/owl.carousel.min.js',
            '/js/main.js',
      ];

      const head = document.getElementsByTagName('head')[0];

      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        head.appendChild(script);
      });
    },
    async getProductInfo(){
       try{
        const pr = await axios.get(`api/getProductInfo/${this.$route.params.id}`);
        this.product = pr.data.product;
        this.comments = pr.data.comments;
        this.count = pr.data.count;
       }catch(error){
        console.log(error);
       }
    },
    
    async AddToCart(){
        try{
            const add = await axios.post('api/additem',{
                productID: this.$route.params.id,
                clientID: sessionStorage.getItem("jwt"),
            });
            const data = add.data;
            console.log(data);
   this.showAlert = true;
      this.alertMessage = "Added to Cart";
        }catch(error){
            console.log(error);
        }
    }
    },
    components:{
        Header,
        
    }
}
</script>