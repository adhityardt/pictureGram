import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBiGf2NKCRHkoDbiDlcOavvsufL7Vu6Rbg',
  authDomain: 'socmed-sharing.firebaseapp.com',
  databaseURL: 'https://socmed-sharing.firebaseio.com',
  projectId: 'socmed-sharing',
  storageBucket: 'socmed-sharing.appspot.com',
  messagingSenderId: '498385924650'
})

export const db = firebaseApp.database()
export const user = firebaseApp.auth()
export const regUser = db.ref('Users')
export const regPic = db.ref('Pictures')
export const storageRef = firebaseApp.storage()
// export const storageRef = firebaseApp.storage().ref(Number(new Date()).toString())
