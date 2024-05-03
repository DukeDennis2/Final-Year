  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyABlt5RFJLPMjDyAnY9-CeXdbs7u4SiD6s",
    authDomain: "development-login-b04f3.firebaseapp.com",
    projectId: "development-login-b04f3",
    storageBucket: "development-login-b04f3.appspot.com",
    messagingSenderId: "122944613775",
    appId: "1:122944613775:web:9f231aaba55a242ee3affa"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth();
  

  var firstname = document.getElementById('first').Value;
  var lastname = document.getElementById('last').Value;
  var email = document.getElementById('email').Value;
  var password = document.getElementById('password').Value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('User has been created!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert('errorMessage')
  });



  

  



