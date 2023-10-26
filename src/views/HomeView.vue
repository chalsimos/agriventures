<template>
    <Header />
    <Categories />
    <Featured />
    <Footer />
    
</template>


<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css');
  @import url('https://agriventures.tech/css/font-awesome.min.css" type="text/css');
  @import url('https://agriventures.tech/css/elegant-icons.css" type="text/css');
  @import url('https://agriventures.tech/css/nice-select.css" type="text/css');
  @import url('https://agriventures.tech/css/jquery-ui.min.css" type="text/css');
  @import url('https://agriventures.tech/css/owl.carousel.min.css" type="text/css');
  @import url('https://agriventures.tech/css/slicknav.min.css" type="text/css');
  @import url('https://agriventures.tech/css/style.css" type="text/css');
	@import url('https://agriventures.tech/css/base.css');
	@import url('https://agriventures.tech/css/Toast.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap');

</style>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Featured from '@/components/Featured.vue'
import axios from 'axios';
export default {
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
            'js/jquery-3.3.1.min.js',
            'js/bootstrap.min.js',
            'js/jquery.nice-select.min.js',
            'js/jquery-ui.min.js',
            'js/jquery.slicknav.js',
            'js/mixitup.min.js',
            'js/owl.carousel.min.js',
            'js/main.js',
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
        }catch(error){
            console.log(error);
        }
        }
    },
  name: 'HomeView',
  components: {
    Footer,
    Categories,
    Featured,
    Header,
    
  }
}
</script>
