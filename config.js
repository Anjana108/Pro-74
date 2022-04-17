import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmeMFzXF3q14oVeU2D_EpIqirChzRWaLM",
  authDomain: "e-ride-a0f5b.firebaseapp.com",
  projectId: "e-ride-a0f5b",
  storageBucket: "e-ride-a0f5b.appspot.com",
  messagingSenderId: "95192937077",
  appId: "1:95192937077:web:39f2dccca700ed47c33e3c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
