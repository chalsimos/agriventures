<template>
  <div class="login-page" style="min-height: 467.938px;">
    <div class="login-box">
    <div class="login-logo">
      <a href="https://agriventures.tech"><img src="https://agriventures.tech/img/logo/logow.bmp" width="350" alt=""></a>                  
    </div>
    <div class="card card-primary card-outline card-outline-tabs">
      <div class="card-header p-0 border-bottom-0">
        <ul class="nav nav-tabs" id="customer-panel-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="customer-panel-tab" data-toggle="pill" href="#customer-panel" role="tab" aria-controls="customer-panel" aria-selected="true">Customer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="cooperative-panel-tab" data-toggle="pill" href="#cooperative-panel" role="tab" aria-controls="cooperative-panel" aria-selected="false">Cooperative</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="farmers-panel-tab" data-toggle="pill" href="#farmers-panel" role="tab" aria-controls="farmers-panel" aria-selected="false">Farmers</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        
        <div class="tab-content" id="customer-panel-tabContent">
          <div class="tab-pane fade show active" id="customer-panel" role="tabpanel" aria-labelledby="customer-panel-tab">
            <p class="login-box-msg">You are interacting as Customer</p>
            
 <form @submit.prevent="LoginM">
  <div class="flash-message" v-if="!showError">
                            Passwords do not match!
                        </div>
              <div class="input-group mb-3">
                <input type="text" v-model="username" class="form-control" placeholder="Username or Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" v-model="password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <!-- /.col -->
                                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <p class="mb-1">
              <a class="" id="customer-forgot-panel-tab" data-toggle="pill" href="#customer-forgot-panel" role="tab" aria-controls="customer-panel" aria-selected="true">I forgot my password</a>
            </p>
            <p class="mb-0">
              <!-- <a href="/auth/register" class="text-center">Register a new membership</a> -->
              <a href="/auth/nregister" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
            
          </div>
          <div class="tab-pane fade" id="cooperative-panel" role="tabpanel" aria-labelledby="cooperative-panel-tab">
            <p class="login-box-msg">You are interacting as Cooperative</p>
            
                        <form action="https://agriventures.tech/auth/vcoop">
              <div class="input-group mb-3">
                <input type="text" name="username" class="form-control" placeholder="Username or Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" name="password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <!-- /.col -->
                                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <p class="mb-1">
              <a class="" id="cforgot-panel-tab" data-toggle="pill" href="#cforgot-panel" role="tab" aria-controls="customer-panel" aria-selected="true">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="/auth/nregister" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
          </div>
          <div class="tab-pane fade" id="farmers-panel" role="tabpanel" aria-labelledby="farmers-panel-tab">
            <p class="login-box-msg">You are interacting as Farmer</p>
            
                        <form action="https://agriventures.tech/auth/vfarmer">
              <div class="input-group mb-3">
                <input type="text" name="username" class="form-control" placeholder="Username or Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" name="password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <!-- /.col -->
                                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <p class="mb-1">
              <a class="" id="customer-forgot-panel-tab" data-toggle="pill" href="#customer-forgot-panel" role="tab" aria-controls="customer-panel" aria-selected="true">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="/auth/farmer/register" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
          </div>
          <!-- customer forgot -->
          <div class="tab-pane fade" id="customer-forgot-panel" role="tabpanel" aria-labelledby="customer-forgot-panel-tab">
            <p class="login-box-msg">You are interacting as Customer</p>
            
                        <form action="https://agriventures.tech/auth/iforgot">
              <div class="input-group mb-3">
                <input type="text" name="email" class="form-control" placeholder="Enter your email address to continue" required="">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                                <input type="hidden" value="customer" name="type">
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Reset</button>
                </div>
              </div>
            </form>
            <p class="mb-1">
              
            </p>
            <p class="mb-0">
              <a href="/auth/register" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
          </div>
          <!-- end forgot -->
           <!-- Cooperative forgot -->
          <div class="tab-pane fade" id="cforgot-panel" role="tabpanel" aria-labelledby="cforgot-panel-tab">
            <p class="login-box-msg">You are interacting as Cooperative</p>
            
                        <form action="https://agriventures.tech/auth/iforgot">
              <div class="input-group mb-3">
                <input type="text" name="email" class="form-control" placeholder="Enter your email address to continue" required="">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                                <input type="hidden" value="cooperative" name="type">
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Reset</button>
                </div>
              </div>
            </form>
            <p class="mb-1">
              
            </p>
            <p class="mb-0">
              <a href="/auth/coop/register" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
          </div>
          <!-- end forgot -->
          <!-- Farmers forgot -->
          <div class="tab-pane fade" id="farmers-forgot-panel" role="tabpanel" aria-labelledby="farmers-forgot-panel-tab">
            <p class="login-box-msg">You are interacting as Farmer</p>
            
                        <form action="https://agriventures.tech/auth/iforgot">
              <div class="input-group mb-3">
                <input type="text" name="email" class="form-control" placeholder="Enter your email address to continue" required="">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                                <input type="hidden" value="farmer" name="type">
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Reset</button>
                </div>
              </div>
            </form>
            <p class="mb-1">
              
            </p>
            <p class="mb-0">
              <a href="/auth/register" class="text-center">Register a new membership</a>
            </p>
            <p class="mb-0">
              <a href="/">Home</a>
            </p>
          </div>
          <!-- end forgot -->
        </div>
        
      </div>
      <!-- /.card -->
    </div>
    
  </div>
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
@import url('https://agriventures.tech/mgmt/dist/css/adminlte.min.css');
@import url('https://agriventures.tech/mgmt/plugins/fontawesome-free/css/all.min.css');
@import url('https://agriventures.tech/mgmt/plugins/icheck-bootstrap/icheck-bootstrap.min.css');
/* @import'../../public/css/adminlte.min.css';
@import'../../public/css/all.min.css';
@import'../../public/css/icheck-bootstrap.min.css'; */
</style>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      username:"",
      password:"",
      showError: true, 

    }
  },
  computed: {
    isLoggedIn() {
      return sessionStorage.getItem("loggedIn") === "true";
    },
  },
    mounted(){
        this.loadScripts();
    },
   methods:{
      
    async LoginM(event){
      event.preventDefault();
      try{
        const response = await axios.post('api/login',{
          username: this.username,
          password: this.password,
        });
        
        const data = response.data;
        sessionStorage.setItem("jwt", data.token);
        this.username ="";
        this.passsword="";
        this.$router.push("/");
        // this.$store.commit("setLoggedIn", true);      
        sessionStorage.setItem("loggedIn", true);
        // console.log(data.token);
      }catch(error){
          this.showError = false;
      }
    },
        loadScripts(){
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
        }
   }
}
</script>