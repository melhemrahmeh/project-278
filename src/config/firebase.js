import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = "AIzaSyBrqC_L_898CcfQdHHYhVco16-guxzctUE";
const DOMAIN = "play-store-f78f2.firebaseapp.com";
const PROJECT_ID = "play-store-f78f2";
const STORAGE_BUCKET = "play-store-f78f2.appspot.com";
const MESSAGING_SENDER_ID = "578796530801";
const APP_ID = "1:578796530801:web:3d7f5b49bbf712bdb3bfd0";

const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
});

// export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
