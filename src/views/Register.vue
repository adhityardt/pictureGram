<template>
  <div id="app">
    <div class="container4" style="margin-top:50px; margin-bottom:50px;">
      <div class="col-md-6">
        <img class="img-responsive" src="./socmedshare.png" width="454" height="618"/>
      </div>
      <div>
        <div class="col-md-5" style="background-color: white; padding: 60px; border: 1px solid #e6e6e6;">
          <h3 class="text-center" style="margin-top:0">PictureGram</h3>
          <p class="text-center" style="color:#999;font-weight:700;font-size:17px;line-height:20px;">Sign up to see pictures from your friends.</p>
          <div class="form-group">
            <input type="text" class="form-control" v-model="email" placeholder="Insert your e-mail">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="fullname" placeholder="Insert your full name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="username" placeholder="Insert your unique username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default" @click="registerUser()" style="width:100%;background-color:#3897f0;color:white;"><b>Sign Up</b></button>
          </div>
          <p class="text-center" style="color:#999;font-weight:700;font-size:14px;line-height:18px;">
              By signing up, you agree to our <br> <b style="color:#000">Terms</b> & <b style="color:#000">Privacy Policy</b>.
          </p>
          <br>
          <p class="text-center">
              Have an account? <a @click="changeLogin" style="cursor: pointer;">Log in</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alertify from 'alertifyjs'
import { user } from '../firebase.js'
import { regUser } from '../firebase.js'
export default {
  name: 'register',
  data () {
    return {
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser () {
      let self = this
      user.createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        regUser.child(response.user.uid).set({
          name: self.fullname,
          email: self.email,
          username: self.username
        })
        alertify
        .alert("You have successfully registered", function(){
          alertify.message('You are registered to the database');
        });
        console.log(response.user)
      })
      .catch(err => {
        alertify
        .alert("Email or password is wrong", function(){
          alertify.message('Please check or re-enter your email and password');
        });
        console.log(err)
      }) 
    },
    changeLogin () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style>
#app{
      background-color: #fafafa;
    }
    @media (min-width: 1200px){
      .container4 {
          width: 970px;
      }
    }
</style>
