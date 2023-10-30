import axios from 'axios';

export default (await import('vue')).defineComponent({
data() {
return {
baseUrl: 'https://agriventures.tech/',
secret: 'Chr0x!zHuiD31',
products: [],
encodedId: this.$route.params.id,
categories: [],
datas: []
};
},
mounted() {
this.getProducts();
this.getCategories();
},
computed: {
decodedId() {
return this.decodeId(this.encodedId, this.secret);
},
urlParams() {
const fullPath = this.$route.fullPath;
const indexOfUserId = fullPath.indexOf('/');
return fullPath.substring(0, indexOfUserId + 4);
}
},

methods: {
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
getFullImageUrl(image) {
return this.baseUrl + image;
},
encodeId(id) {
const combinedValue = id + this.secret;
return btoa(combinedValue);
},
async getCategories() {
try {
const tio = await axios.get('gcat');
const da = await axios.get(`api/getprovinces/${this.$route.params.id}`);
this.datas = da.data;
this.categories = tio.data;

} catch (error) {
console.log(error);
}
},
async getProducts() {
// const productID = this.$route.params.id;
// axios.get(`api/getProducts/${this.$route.params.id}`)
//     .then(response=>{
//         this.products =response.data;
//     })
//     .catch(error =>{
//         console.log('Error: ',error);
//     });
try {

const prod = await axios.get(`api/getProducts${this.urlParams}/${this.$route.params.id}`);
this.products = prod.data;
} catch (error) {
console.log(error);
}
},
},

//     beforeRouteUpdate(to, from, next) {
//     this.getProducts(); // Call your data-fetching method
//     next();
//   },
//   created(){
//         this.getProducts();
//     },
// activated(){
// this.getProducts();
// },
watch: {
'$route.params.id': 'getProducts',
},
name: 'Prods'
});
