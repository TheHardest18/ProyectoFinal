const config ={
    apiKey: "AIzaSyBt0K3U7Brm4hcarqjZLyB2t91987ukL6U",
    authDomain: "proyecto-final-6d979.firebaseapp.com",
    databaseURL: "https://proyecto-final-6d979.firebaseio.com",
    projectId: "proyecto-final-6d979",
    storageBucket: "proyecto-final-6d979.appspot.com",
    messagingSenderId: "483572031012",
    appId: "1:483572031012:web:78fd8dca3607eced7e82b1",
    measurementId: "G-ER3PFNJYJF"
};

firebase.initializeApp(config);
firebase.analytics();
const firestore = firebase.firestore();