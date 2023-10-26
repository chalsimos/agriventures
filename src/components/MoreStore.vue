<template>
<section class="related-product">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title related__product__title">
                    <h2>More from <i>{{prs.name}}</i></h2>
                </div>
            </div>
        </div>
         
         </div>
    </div>
</section>

</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            prs:[],
            secret: 'Chr0x!zHuiD31',
            baseUrl: 'https://agriventures.tech/',
        }
    },
    mounted(){
        this.getProductInfo();
        // console.log(this.$route.params.id);
    },
    methods:{
         encodeId(id) {
            const combinedValue = id + this.secret;
            return btoa(combinedValue);
        },
          getFullImageUrl(image){
            return this.baseUrl + image;
        },
        async getProductInfo(){            
            try{
                const pr = await axios.get(`api/getProductInfo/${this.$route.params.id}`);
                this.prs = pr.data.product;
                console.log(pr.data);
            }catch(error){
                console.log(error);}
    }
    }
}
</script>