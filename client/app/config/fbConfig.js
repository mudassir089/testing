import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAd8qbUN6WP9rgi6qtmvCP3LUAV-TGPqU8",
  authDomain: "e-commerce-store-426d5.firebaseapp.com",
  databaseURL: "https://e-commerce-store-426d5-default-rtdb.firebaseio.com",
  projectId: "e-commerce-store-426d5",
  storageBucket: "e-commerce-store-426d5.appspot.com",
  messagingSenderId: "363140488406",
  appId: "1:363140488406:web:b9fdcb21a7800cb011fd77",
};
// Initialize Firebase

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// firebase.firestore().settings({ timestampsInSnapshots: true });
// export default firebase;
