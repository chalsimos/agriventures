<template>
    <div>
    <section class="featured spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- <div class="section-title"> -->
                    <h2>Just for you</h2>
                <!-- </div> -->
                <div class="featured__controls">
                    <ul>
                        <li class="active" data-filter="*">All</li>
                        <li v-for="category in categories" data-filter=".{{category.name}}">{{category.name}}</li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div class="row featured__filter">
          <!-- <?php foreach ($product as $prod): ?>
            <?php $encrypted_id = base64_encode($prod['pid'] . $secret); ?> -->
          <div v-for="prod in product" :class="['col-lg-3', 'col-md-4', 'col-sm-6', {'col-6': isMobile}]">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" data-setbg="{{prod.p_image}}">
                        <img :src="getFullImageUrl(prod.p_image)">
                        <!-- <img :src="getFullImageUrl(prod.p_image)" alt="fd"> -->
                        <ul class="featured__item__pic__hover">
                            <li><a><i class="fa fa-heart wishlist" data-id="" data-name="{{prod.p_name}}"></i></a></li>
                            <li><router-link :to="`/product/${encodeId(prod.pid)}`"><i class="fa fa-eye"></i></router-link></li>
                            
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="<?= base_url('/front/product/'. $encrypted_id ) ?>">{{prod.p_name}}</a></h6>
                        <h5>₱ {{prod.p_price}}</h5>
                    </div>
                </div>
            </div>
          
        </div>
  <div>
       <!-- <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
       <span>{{ currentPage }}</span>
       <button @click="nextPage" :disabled="currentPage * itemsPerPage >= totalItems">Next</button> -->
       <span v-if="currentPage * itemsPerPage < totalItems">Loading...</span>
        <span v-else>All items loaded</span>
     </div>
        <!-- <button type="button" class="btn btn-primary" id="myShowBtn">Show Toast</button> -->

    </div>
</section>
</div>

</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            baseUrl: 'https://agriventures.tech/',
            product:[],
            categories:[],
            currentPage: 1,
            itemsPerPage:4,
            totalItems:0,
            secret:'Chr0x!zHuiD31',
        };
       
    },
    computed:{
 isMobile() {
    return window.innerWidth <= 576; // Adjust the breakpoint as needed
  }
    },
     mounted(){
            this.getCategories();
            this.getProducts();
              window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
             encodeId(id) {
                const combinedValue = id + this.secret;
                return btoa(combinedValue);
                },
            handleScroll(){
                const scrollPosition = window.innerHeight + window.pageYOffset;
                const pageHeight = document.documentElement.scrollHeight;
                if(scrollPosition >= pageHeight -10){
                    this.loadNextItems();
                }
            },
            loadNextItems(){
               if (this.currentPage * this.itemsPerPage < this.totalItems) {
                this.currentPage++;
                this.getProducts();
                }
            },
            previousPage() {
            if (this.currentPage > 1) {
            this.currentPage--;
            this.getProducts();
            }
             },
          nextPage() {
            if (this.currentPage * this.itemsPerPage < this.totalItems) {
                this.currentPage++;
                this.getProducts();
            }
            },
            getFullImageUrl(image){
                return this.baseUrl + image;
            },
            async getCategories(){
                try{
                    const tio = await axios.get('gcat');
                    this.categories = tio.data;
                }catch(error){
                    console.log(error);
                }
            },
            async getProducts(){
                try{
                    const response = await axios.get('getProducts',{
                        params:{
                            page:this.currentPage,
                            limit:10,
                        },
                    });
                    this.totalItems = response.data.count;
                    this.product = response.data.products;
                }catch(error){
                    console.log(error);
                }
            }
        }
}
</script>