
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDjMT0GLaD6kfT2orJ1gKmVjvbTFAky40E",
  authDomain: "filmybazarbd.firebaseapp.com",
  databaseURL: "https://filmybazarbd-default-rtdb.firebaseio.com",
  projectId: "filmybazarbd",
  storageBucket: "filmybazarbd.firebasestorage.app",
  messagingSenderId: "1059427249105",
  appId: "1:1059427249105:web:567dab1432fd83e2458ef0",
  measurementId: "G-7824DMQ3GE"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
window.filmyDB = db;
