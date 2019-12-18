import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCIDjALQR5C_mcKQGyySEZXB5xdQE7S3As",
    authDomain: "reactapp-c8cbe.firebaseapp.com",
    databaseURL: "https://reactapp-c8cbe.firebaseio.com",
    projectId: "reactapp-c8cbe",
    storageBucket: "reactapp-c8cbe.appspot.com",
    messagingSenderId: "1000077589649",
    appId: "1:1000077589649:web:995d7c2d5a61c909c89330",
    measurementId: "G-EQ6TCZMQ5D"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }
}

export default new Firebase;