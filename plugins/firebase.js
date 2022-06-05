import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBnCb4y9n9W_ihjllEb_VM59gDD8vqK5ng",
      authDomain: "fir-pj-ecdf2.firebaseapp.com",
      projectId: "fir-pj-ecdf2",
      storageBucket: "fir-pj-ecdf2.appspot.com",
      messagingSenderId: "727067805012",
      appId: "1:727067805012:web:698066a4cb4007163e74c1",
      measurementId: "G-PJ4YJS79NZ"
    }
  )
}
  
export default firebase