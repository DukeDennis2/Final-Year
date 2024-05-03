function hideSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
    sidebar.style.display = 'none'; // Hide the sidebar
}
//shows sidebar when the desktop screen is large
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
//closes the sidebar when user clicks on the 'X' icon
function hideSidebar(){
    const sidebar = document.querySelector('sidebar')
    sidebar.style.display = 'hide'
}

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

const signUp = document.querySelector('#signup-form');
signupForm.addEventListener('', (e) => {
   e.preventDefault();

   //get user info
   const name = signupForm['signup-name'].value
   const email = signupForm['signup-email'].value
   const password = signupForm['signup-password'].value

   //sign up user
   auth.createUserEmailAndPassword(name,email,password)
})

createAdminWithEmailAndPassword(auth, email, password)
.then((adminCredential) => {
  // Signed up 
  const user = adminCredential.admin;
  alert('Admin has been created!')
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  
  alert('errorMessage')
});

