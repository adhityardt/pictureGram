<template>
  <div id="home">
    <nav class="navbar navbar-default navbar-fixed-top" style="background-color:white">
      <div class="container1">
        <div class="navbar-header">
          <a class="navbar-brand" @click="timeline">Picture Gram</a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default glyphicon glyphicon-search"></button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a data-toggle="modal" data-target="#myModal" style="cursor:pointer">
                <span class="glyphicon glyphicon-send"></span> POST</a>
            </li>
            <li>
              <a style="cursor:pointer" @click="doLogout">
                <span class="glyphicon glyphicon-log-out"></span> LOGOUT</a>
            </li>
            <li>
              <a style="cursor:pointer" @click="myProfile">
                <span class="glyphicon glyphicon-user"></span> MY PROFILE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Post Image</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Image File:</label>
              <input type="file" class="form-control" @change="postImageHandler">
            </div>
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" rows="4" cols="50" v-model="description"></textarea>
            </div>
            <button type="submit" class="btn btn-warning" @click="postImage" data-dismiss="modal">POST</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { regPic } from '../firebase.js'
import { storageRef } from '../firebase.js'
import { functions } from 'firebase';
export default {
  name: 'navbar',
  data () {
    return {
      image: '',
      title: '',
      description: '',
      date: ''
    }
  },
  methods: {
    postImageHandler: function (event) {
      this.image = event.target.files[0]
    },
    postImage: function () {
      this.date = Number(new Date()).toString()
      storageRef.ref(this.date).put(this.image)
      .then (response => {
        console.log(this.date)
        storageRef.ref(this.date).getDownloadURL()
        .then(urlResponse => {
          console.log('===========ini urlnya==========', urlResponse)
          regPic.child(localStorage.getItem('userId')).push({
          title: this.title,
          description: this.description,
          url: urlResponse
        })
        })
        .catch(err => {
          console.log (err)
        })
      })
      .catch (error => {
        console.log (error)
      })
    },
    myProfile: function () {
      this.$router.push({name: 'profile'})
    },
    timeline: function () {
      this.$router.push({name: 'timeline'})
    },
    doLogout: function () {
      localStorage.removeItem('userId')
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style>
.container1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
