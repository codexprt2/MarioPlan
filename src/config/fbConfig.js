import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDR0EHYZQ1He7RuX982z_H7K61L_neD2J4",
	authDomain: "marioplan-2e643.firebaseapp.com",
	projectId: "marioplan-2e643",
	storageBucket: "marioplan-2e643.appspot.com",
	messagingSenderId: "876477129560",
	appId: "1:876477129560:web:1f232b2787367a28bbfb2d",
	measurementId: "G-XBN2V0W79S",
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
