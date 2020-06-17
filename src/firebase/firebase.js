import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOlRrypFv2CZlbPp9cqdLWSZq-xdhrBo",
  authDomain: "react-trello-app.firebaseapp.com",
  databaseURL: "https://react-trello-app.firebaseio.com",
  projectId: "react-trello-app",
  storageBucket: "react-trello-app.appspot.com",
  messagingSenderId: "9318321680",
  appId: "1:9318321680:web:057ef7247b6504ad860495"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;