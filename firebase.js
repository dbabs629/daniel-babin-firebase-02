import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZe1zC0l0Yt1UG-r-2eBjOcNHH4J5c-CI",
  authDomain: "react-native-assignment-2.firebaseapp.com",
  databaseURL: "https://react-native-assignment-2.firebaseio.com",
  projectId: "react-native-assignment-2",
  storageBucket: "react-native-assignment-2.appspot.com",
  messagingSenderId: "589321761564",
  appId: "1:589321761564:web:db250aa7430037f746c0d9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;