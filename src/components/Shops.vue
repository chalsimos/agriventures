<template>
<section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <div class="sidebar">
                        <div class="sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li v-for="category in categories"> 
                                <router-link :to="`/category/${encodeId(category.name)}`">{{category.name}}</router-link>
                            </li>               
                            </ul>
                        </div>
                        <div class="sidebar__item">
                            <h4>Region</h4>
                            <ul>
                                <li v-for="reg in regions"> 
                                <router-link :to="`/region/${encodeId(reg.rname)}`">{{reg.rname}}</router-link>
                            </li>               
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div class="col-lg-9 col-md-7">
                    <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>S H O P S</h2>
                        </div>
                    </div>
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-3">
                                <div class="filter__option">
                                    <span class="icon_grid-2x2"></span>
                                    <span class="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="shops in shops">
                            <div class="product__item">
                                <div class="product__item__pic set-bg">
                                    <img :src="getFullImageUrl(shops.header)">
                                    <ul class="product__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">{{ shops.name }}</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<Footer />
</template>

<script>
import axios from 'axios'
import Footer from '@/components/Footer.vue'
export default{
    components:{
        Footer,
    },
    data(){
        return{
            shops: [],
            categories:[],
            secret: 'Chr0x!zHuiD31',
            baseUrl: 'https://agriventures.tech/',
            regions:[],
        }
    },
    mounted(){
        this.getShops();
        this.getCategories();
    },
    methods:{
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
            this.categories = tio.data;
        }catch(error){
            console.log(error);
        }
        },
        async getShops(){
            try{
                const data = await axios.get('api/shops');
                this.shops = data.data.coop;
                this.regions = data.data.regions;
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>