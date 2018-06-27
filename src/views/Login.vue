<template>
  <div id="app">
    <div class="col-md-5" style="background-color: white; padding: 60px; border: 1px solid #e6e6e6;">
      <h3 class="text-center" style="margin-top:0">PictureGram</h3>
      <p class="text-center" style="color:#999;font-weight:700;font-size:17px;line-height:20px;">Sign In to see photos from your friends.</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default" @click="login()" style="width:100%;background-color:#3897f0;color:white;"><b>Sign In</b></button>
      </div>
      <p class="text-center" style="color:#999;font-weight:700;font-size:14px;line-height:18px;">
          By signing up, you agree to our <br> <b style="color:#000">Terms</b> & <b style="color:#000">Privacy Policy</b>.
      </p>
      <br>
      <p class="text-center">
          New to the site? <a @click="changeLoginToRegister" style="cursor: pointer;">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
import { user } from '../firebase.js'
import alertify from 'alertifyjs'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      user.signInWithEmailAndPassword(this.email, this.password)
      .then (response => {
        localStorage.setItem('userId', response.user.uid)
        alertify
        .alert("You have successfully logged in", function(){
          alertify.message('You are now logged in');
        });
        this.$router.push({name: 'timeline'})
      })
      .catch (error => {
        alertify
        .alert("Email or password is wrong", function(){
          alertify.message('Please check or re-enter your email and password');
        });
        console.log(error)
      })
    },
    changeLoginToRegister () {
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style>
#app{
      background-color: #fafafa;
    }
    @media (min-width: 1200px){
      .container {
          width: 970px;
      }
    }
</style>
