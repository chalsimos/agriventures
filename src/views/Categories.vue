<template>
    <div>
        <Header />
        <section class="breadcrumb-section set-bg" data-setbg="/img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Organi Shop</h2>
                        <div class="breadcrumb__option">
                            <router-link to="/">Home</router-link>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Prods />
    </div>
</template>
<script>

import Header from '@/components/Header.vue'
import Prods from '@/components/Prods.vue'
import axios from 'axios';

export default{
    data(){
        return{
            categories:[],
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
   
    name:'Categories',
    components:{
        Header,
        Prods
    }
}
</script>