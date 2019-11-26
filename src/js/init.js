 // Your web app's Firebase configuration
export const init=()=>{ 
    var firebaseConfig = {
    apiKey: "AIzaSyDxsYnfP-RcrCHzeSXRN11rQoABLuirCd0",
    authDomain: "chile-desperto.firebaseapp.com",
    databaseURL: "https://chile-desperto.firebaseio.com",
    projectId: "chile-desperto",
    storageBucket: "chile-desperto.appspot.com",
    messagingSenderId: "794052860079",
    appId: "1:794052860079:web:64aa4459cd31403f131c5a",
    measurementId: "G-467QPH3M3N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}