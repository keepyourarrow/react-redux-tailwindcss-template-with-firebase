import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

import config from "./config";

/* Example of config file
const config = {
  firebase_API_KEY:
  firebase_AUTH_DOMAIN:
  firebase_DATABASE_URL:
  firebase_PROJECT_ID:
  firebase_STORAGE_BUCKET:
  firebase_MESSAGING_SENDER_ID:
  firebase_API_ID:
};
export default config;

*/

// replace these values with your own!
export const firebaseConfig = {
  apiKey: config.firebase_API_KEY,
  authDomain: config.firebase_AUTH_DOMAIN,
  databaseURL: config.firebase_DATABASE_URL,
  projectId: config.firebase_PROJECT_ID,
  storageBucket: config.firebase_STORAGE_BUCKET,
  messagingSenderId: config.firebase_MESSAGING_SENDER_ID,
  appId: config.firebase_API_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// storage if you want to store files
const storage = firebase.storage();
//database
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, timestamp };
