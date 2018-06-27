<template>
  <div class="content2" >
    <div v-for="picture of pictures" :key="picture['.key']">
      <!-- <img :src="picture.url" width="415" height="300"> -->
      <div class="card2">
        <img :src="picture.url" alt="Avatar" style="width:100%">
        <div class="container2">
          <h4><b>{{picture.title}}</b></h4> 
          <p>{{picture.description}}</p> 
        </div>
      </div>

    </div>
    <!-- <div class="col-md-4">
      <div class="thumbnail" style="padding: 10px;">
        <label>Profile</label>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  name: 'profileContent',
  firebase: {
    pictures: db.ref('/Pictures/' + localStorage.getItem('userId'))
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
  created () {

  }
}
</script>

<style>
.content2 {
  display: flex;
  flex-direction: row;
  width: 30%;
  align-items: flex-end;
}
.card2 {

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: left;
  max-width: 300px;
  margin-left: 10px;
}

.card2:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container2 {
  display: flex;
  padding: 2px 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
