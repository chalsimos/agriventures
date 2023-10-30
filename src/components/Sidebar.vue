<template>
<div class="sidebar">
<div class="sidebar__item">
    <h4>Categories</h4>
    <ul>
        <li v-for="category in categories">  <router-link :to="`/category/${encodeId(category.name)}`">{{category.name}}</router-link></li>
    </ul>
    </div>
    <div class="sidebar__item">
    <h4 v-if="urlParams === '/reg'">Provinces</h4>
    <ul>
        <li v-for="category in datas">  <router-link :to="`/provinces/${encodeId(category.prov.province)}`">{{category.province}}</router-link></li>
    </ul>
    <h4 v-if="urlParams === '/pro'">Province</h4>
    <ul>
        <li v-for="category in datas">  <router-link :to="`/municipality/${encodeId(category.municipality.province)}`">{{category.province}}</router-link></li>
    </ul>
    <h4 v-if="urlParams === '/mun'">Municipality</h4>
    <ul>
        <li v-for="category in datas">  <router-link :to="`/stores/${encodeId(category.name)}`">{{category.store.name}}</router-link></li>
    </ul>
</div>

</div>
</template>

<script>

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