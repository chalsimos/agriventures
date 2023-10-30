<template>
<Header />
<section class="breadcrumb-section set-bg" data-setbg="/img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>AgriVentures</h2>
                        <div class="breadcrumb__option">
                            <router-link to="/">Home</router-link>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Shops />
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Categories from '@/components/Categories.vue'
import Shops from '@/components/Shops.vue'
import Footer from '@/components/Footer.vue'
export default{
    name: 'ShopPage',
    components:{
        Header,Categories, Shops, Footer
    },
    data(){
        return{
            categories:[]
        }
    },
    mounted(){
        this.getCategories();
        this.loadScripts();
    },
    methods:{
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
    
      async getCategories(){
        try{
            const tio = await axios.get('gcat');
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