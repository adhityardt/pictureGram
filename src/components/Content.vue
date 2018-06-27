<template>
  <div class="content" >
    <div v-for="(picture, index) in pictureIdentityList" :key="index">
      <div class="card">
        <img :src="picture.data.url" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>{{picture.data.title}}</b></h4> 
          <p>{{picture.data.description}}</p> 
        </div>
      </div>

    </div>
    <!-- <div v-for="picture of pictures" :key="picture['.key']">
      <div class="card">
        <img :src="picture.url" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>John Doe</b></h4> 
          <p>Architect & Engineer</p> 
        </div>
      </div>

    </div> -->
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  name: 'content',
  firebase: {
    pictures: db.ref('/Pictures/' + localStorage.getItem('userId'))
  },
  data () {
    return {
      userIdList: [],
      pictureIdentityList: []
    }
  },
  methods: {
    getUserId () {
      db.ref('/Pictures/').on('value', (snapshot) => {
        snapshot.forEach(snap => {
          this.userIdList.push(snap.key)
        })
        console.log('======== ini user id list =================')
        console.log(this.userIdList)
        this.userIdList.forEach(userId => {
        db.ref('/Pictures/' + userId).on('value', (snapshot) => {
          snapshot.forEach(snap => {
            let pictureList = {
              key: snap.key,
              data: snap.val()
            }
            this.pictureIdentityList.push(pictureList)
          })
          console.log('=========== ini picture identity list===========')
          console.log(this.pictureIdentityList)
        })
      })
      })
    },
    // getPictureUrl () {
    //   this.userIdList.forEach(userId => {
    //     db.ref('/Pictures/' + userId).on('value', (snapshot) => {
    //       snapshot.forEach(snap => {
    //         let pictureList = {
    //           key: snap.key,
    //           data: snap.val()
    //         }
    //         this.pictureIdentityList.push(pictureList)
    //       })
    //       console.log('=========== ini picture identity list===========')
    //       console.log(this.pictureIdentityList)
    //     })
    //   })
    // }
  },
  created () {
    this.getUserId()
  },
  // mounted() {
  //   this.getPictureUrl()
  // }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;
  margin-top: 20px;
  /* justify-content: flex-start; */
  /* flex-wrap: wrap-reverse; */
}
.card {

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: left;
  max-width: 600px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  padding: 2px 16px;
}
</style>
