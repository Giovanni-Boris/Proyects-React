import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3U5eXalesrzMrO4Q5Wvy9B7buCSrW2QU",
  authDomain: "netflix-27882.firebaseapp.com",
  projectId: "netflix-27882",
  storageBucket: "netflix-27882.appspot.com",
  messagingSenderId: "496856021500",
  appId: "1:496856021500:web:6826361fbe1f70a88bda79",
  measurementId: "G-VWL6BEZFQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;