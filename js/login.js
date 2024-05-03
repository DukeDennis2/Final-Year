function hideSidebar() {
  const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
  sidebar.style.display = 'none'; // Hide the sidebar
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
        import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
        

        const firebaseConfig = {
        apiKey: "AIzaSyABlt5RFJLPMjDyAnY9-CeXdbs7u4SiD6s",
        authDomain: "development-login-b04f3.firebaseapp.com",
        projectId: "development-login-b04f3",
        storageBucket: "development-login-b04f3.appspot.com",
        messagingSenderId: "122944613775",
        appId: "1:122944613775:web:9f231aaba55a242ee3affa"
      };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const auth = getAuth();
        console.log(app);

        document.getElementById("login").addEventListener("click", function() {
			  var email =  document.getElementById("login_email").value;
			  var password = document.getElementById("login_password").value;

			signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				alert(user.email+" Login successfully!!!");
				document.getElementById('logout').style.display = 'block';
				window.location.assign("UserHomePage.html");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				alert(errorMessage);
			});		  		  
		});