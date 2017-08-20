// Setup firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDEDUX3syxvKeDeGkutaOC815fnoC5QBV8",
  authDomain: "minafi-fi.firebaseapp.com",
  databaseURL: "https://minafi-fi.firebaseio.com",
  projectId: "minafi-fi",
  storageBucket: "",
  messagingSenderId: "217431444061"
};
firebase.initializeApp(config);
window.user = null;

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Error signing in... ", errorCode, errorMessage);
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.user = user;
  }
});
