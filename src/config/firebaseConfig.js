import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVuu8SWi2WGLuMZHWwYv2HEWIrlObIKhA",
    authDomain: "some-articles.firebaseapp.com",
    databaseURL: "https://some-articles.firebaseio.com",
    projectId: "some-articles",
    storageBucket: "some-articles.appspot.com",
    messagingSenderId: "808060113656",
    appId: "1:808060113656:web:65ecab8a4998a1e70f610d",
    measurementId: "G-X70LKX1GVE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export const storage = firebase.storage();
export const storageRef = storage.ref();

export default firebase;
