<template>
    <div>
    <section class="categories">
        <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel">
                    <div class="col-lg-3">
                        <div  class="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                            <h5 v-for="categori in cat"><a href="#">{{ categori.name }}</a></h5>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            cat: []
        }
    },
    mounted(){
        this.getCategories();
    },
    methods:{
        async getCategories(){
        try{
            const tio = await axios.get('gcat');
            this.cat = tio.data;
        }catch(error){
            console.log(error);
        }
        }
    }
}
</script>