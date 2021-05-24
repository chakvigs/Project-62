import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCWOppX-VAuDpiBelZNDTNk4oDl7kYrOTg",
  authDomain: "project-60-60d7d.firebaseapp.com",
  databaseURL: "https://project-60-60d7d-default-rtdb.firebaseio.com",
  projectId: "project-60-60d7d",
  storageBucket: "project-60-60d7d.appspot.com",
  messagingSenderId: "294186911353",
  appId: "1:294186911353:web:b10cce0d5b8124e250f6a8"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();