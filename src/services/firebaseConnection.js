import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBKqc4skl0JIIcqIYShObVDHZdMIkqGQm0",
    authDomain: "sistemadechamado-d2343.firebaseapp.com",
    projectId: "sistemadechamado-d2343",
    storageBucket: "sistemadechamado-d2343.appspot.com",
    messagingSenderId: "806856589795",
    appId: "1:806856589795:web:8248c6e232e10c09c220d6",
    measurementId: "G-NZWS7J3NM9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;