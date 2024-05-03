import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVtNfQPlK0d4WqgyLH1M2EsIK7hzYoE0M",
  authDomain: "development-project---scores.firebaseapp.com",
  databaseURL: "https://development-project---scores-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "development-project---scores",
  storageBucket: "development-project---scores.appspot.com",
  messagingSenderId: "328317294381",
  appId: "1:328317294381:web:be89ea87337bf7ab0ae5a4",
  measurementId: "G-B6ZP8Z7CSK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = firebase.database();



function saveScore() {
  const player = document.getElementById('name').value;
  const mode = document.getElementById('mode').value;
  let score = document.getElementById('saveScore').value;

  // Check if the score is valid (not empty and not undefined)
  if (score !== undefined && score !== '') {
    const userId = 'user1'; // Replace 'user1' with the actual user ID

    database.ref('users/' + userId).set({
      name: player,
      gameMode: mode,
      score: score
    });

    alert('Saved!');
  } else {
    alert('Please enter a valid score.');
  }
}






// Retrieve the score from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score') || 0;

// Display the score
document.getElementById('scoreValue').textContent = score;

// Function to navigate back to the game mode page
function backTomode() {
  window.location.href = 'gameMode.html';
}

// Function to reset the game
function reset() {
  window.location.href = 'GuessPlayer.html';
}

function saveScore() {
  window.location.href = 'saveScore.html';
}
