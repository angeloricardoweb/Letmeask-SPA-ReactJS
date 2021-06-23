import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6ahtsxj7S_xC23c-pt4herihDYFHD4PY",
    authDomain: "letmeask-1fcb9.firebaseapp.com",
    databaseURL: "https://letmeask-1fcb9-default-rtdb.firebaseio.com",
    projectId: "letmeask-1fcb9",
    storageBucket: "letmeask-1fcb9.appspot.com",
    messagingSenderId: "471084140864",
    appId: "1:471084140864:web:bb872ca67e763d865992a5",
    measurementId: "G-2BT491YSM1"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export{firebase, auth, database}