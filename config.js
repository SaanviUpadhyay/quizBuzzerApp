import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJEbuoVqBpUC5d6D5b9vQ78nqIuRv5XyQ",
  authDomain: "wireless-buzzer-b9176.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-b9176-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-b9176",
  storageBucket: "wireless-buzzer-b9176.appspot.com",
  messagingSenderId: "37810502374",
  appId: "1:37810502374:web:95e1caa0e85290535e5927"
};
 
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();