import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fireweb-restaurant.firebaseapp.com",
  databaseURL: "https://fireweb-restaurant-default-rtdb.firebaseio.com",
  projectId: "fireweb-restaurant",
  storageBucket: "fireweb-restaurant.appspot.com",
  messagingSenderId: "96703855137",
  appId: "1:96703855137:web:a57cc537210d7fa8638160",
  measurementId: "G-1H0YEGHCB1",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
