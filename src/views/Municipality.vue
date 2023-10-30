<template>
    <Header />
    <section class="breadcrumb-section set-bg" data-setbg="/img/breadcrumb.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="breadcrumb__text">
                            <h2 v-if="urlParams === '/reg'">{{ decodedId }}</h2>
                            <h2 v-else="urlParams ==='/mun'">{{ decodedId }}</h2>
                            <div class="breadcrumb__option">
                                <router-link to="/">Home</router-link>
                                <span v-if="urlParams === '/reg'">Region</span>
                                <span v-else-if="urlParams === '/pro'">Province</span>
                                <span v-else="urlParams === '/mun'">Municipality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-5">
                        <div class="sidebar">
                            <div class="sidebar__item">
                                <h4>Categories</h4>
                                <ul>
                                    <li v-for="category in categories">  <router-link :to="`/category/${encodeId(category.name)}`">{{category.name}}</router-link></li>
                                </ul>
                            </div>
                            <div class="sidebar__item">
                                <h4>Provinces</h4>
                                <ul>
                                    <li v-for="province in provinces">  <router-link :to="`/province/${encodeId(province.province)}`">{{province.province}}</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-7">
                        
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
                            <div v-for="prod in products" class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" >
                                        <img :src="getFullImageUrl(prod.p_image)" alt="fd">
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><router-link :to="`/product/${encodeId(prod.pid)}`"><i class="fa fa-eye"></i></router-link></li>
                                        </ul>
                                    </div>
                                    <div class="product__item__text">
                                        <h6><router-link :to="`/product/${encodeId(prod.pid)}`">{{prod.p_name}}</router-link></h6>
                                        <!-- <router-link :to="`/category/${encodeId(category.name)}`">{{category.name}}</router-link> -->
                                        <h5>${{ parseFloat(prod.p_price) }}</h5>
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
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default{
        components:{
            Header, Footer
        },
        data(){
            return{
                categories:[],
                secret: 'Chr0x!zHuiD31',
                baseUrl: 'https://agriventures.tech/',
                encodedId: this.$route.params.id,
                provinces:[],
            }
        },
        computed:{
            decodedId() {
                return this.decodeId(this.encodedId, this.secret);
            },
            urlParams(){
                const fullPath = this.$route.fullPath;
                const indexOfUserId = fullPath.indexOf('/');
                return fullPath.substring(0, indexOfUserId + 4); 
            }
        },
        mounted(){
            this.getCategories();
            this.loadScripts();
        },
        methods:{
            decodeId(encodedId, secret) {
          try {
            // Decode the Base64-encoded value
            const decodedValue = atob(encodedId);
    
            // Remove the secret to get the original ID
            const originalId = decodedValue.slice(0, -secret.length);
    
            return originalId;
          } catch (error) {
            // Handle any potential errors, e.g., invalid encoded ID
            console.error('Decoding error:', error);
            return null; // or another appropriate error handling strategy
          }
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
        encodeId(id) {
            const combinedValue = id + this.secret;
            return btoa(combinedValue);
            },
          async getCategories(){
            try{
                const tio = await axios.get('gcat');
                const da = await axios.get(`api/getprovinces/${this.$route.params.id}`);
                this.provinces = da.data.municipality;
                this.categories = tio.data;
                // next();
            }catch(error){
                console.log(error);
                // next();
            }
            }
        },
    }
    </script>