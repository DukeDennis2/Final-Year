const players = [
    {
        "name": "LeBron James",
        "image": "https://media1.giphy.com/media/vOoLte53vWFiO8lDxq/giphy.webp",
        "win_at_least_1_championship": true,
        "win_more_than_1_championship": true
    },
    {
        "name": "Stephen Curry",
        "image": "https://media3.giphy.com/media/88Wr2wNqXtyhh5pcNZ/200w.gif",
        "win_at_least_1_championship": true,
        "win_more_than_1_championship": true
    },
    {
        "name": "Chris Paul",
        "image": "https://media1.tenor.com/m/F00W5rJTnokAAAAC/chris-paul-not-funny.gif",
        "win_at_least_1_championship": false,
        
    },
    {
        "name": "Kyrie Irving",
        "image": "https://media2.giphy.com/media/2QVUfDCQZ3qb672Mt7/giphy.gif",
        "win_at_least_1_championship": true,
        
    },
    {
        "name": "Kevin Durant",
        "image": "https://68.media.tumblr.com/0d33121472f9067db14ea1dc5acc958d/tumblr_or7n38UP6b1steui8o1_500.gif",
        "win_at_least_1_championship": true,
        "win_more_than_1_championship": true
    },
    {
        "name": "Derrick Rose",
        "image": "https://i.gifer.com/Fq98.gif",
        "win_at_least_1_championship": false,
        
    },
    {
        "name": "Kyrie Irving",
        "image": "https://media2.giphy.com/media/2QVUfDCQZ3qb672Mt7/giphy.gif?cid=790b761110cf7xkftrg9dz2h93rzefb6jcq6ih46jjp2d7ib&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "win_at_least_1_championship": true,
        
    },
    {
        "name": "Luka Doncic",
        "image": "https://media.tenor.com/Hi0JQOAIStUAAAAM/luka-doncic-celebration.gif",
        "win_at_least_1_championship": false,
        
    },
    {
        "name": "Nikola Jokic",
        "image": "https://qph.cf2.quoracdn.net/main-qimg-f405604ead454c57759399a6667b1a7f",
        "win_at_least_1_championship": true,
    },
    {
        "name": "Ja Morant",
        "image": "https://media.tenor.com/6XiuclJ8kXsAAAAM/morant-ja-morant.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Shai Gilgeous-Alexander",
        "image": "https://media2.giphy.com/media/yAq0ppbTdeYZNNdO21/giphy.gif?cid=6c09b952ont28lfbawqmgpsluvqh031zkpfvjzpnghhnvzwm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "points_per_game": 31.3,
        "win_at_least_1_championship": false,
    },
    {
        "name": "Tyrese Haliburton",
        "image": "https://64.media.tumblr.com/f406d4bf771b42e8eb7070eec40659e6/67f0ac4f2acc493b-7a/s540x810/ebd799bf5ca561a13915ce2fb57f7c27209e790a.gifv",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Draymond Green",
        "image": "https://i.gifer.com/fy1H.gif",
        "win_at_least_1_championship": true,
    },
    {
        "name": "Russell Westbrook",
        "image": "https://media1.tenor.com/images/77cc4b83acfb9ac3b3b7fc645c24fdd8/tenor.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Jimmy Butler",
        "image": "https://media1.tenor.com/m/1qdHD-st57UAAAAC/jimmy-butler.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Joel Embiid",
        "image": "https://giffiles.alphacoders.com/219/219241.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Giannis Antetokounmpo",
        "image": "https://media.tenor.com/REzg-sSUdUsAAAAd/milwaukee-bucks-giannis-antetokounmpo.gif",
        "win_at_least_1_championship": true,
    },
    {
        "name": "Scottie Barnes",
        "image": "https://media.tenor.com/tbfQZF4uV1cAAAAd/scottie-barnes-scottie.gif",
        "win_at_least_1_championship": false,
     },
    {
        "name": "Devin Booker",
        "image": "https://media1.giphy.com/media/68G5uZeg93B8Kqrakz/source.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Mikal Bridges",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM-_Aic7WBHgbEJP303sj2Q7rnjbS8F3E9zNv_B_tFQ&s",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Damian Lillard",
        "image": "https://i.pinimg.com/originals/4a/6d/fd/4a6dfd1db4020023e0dc72f7d73da8a9.gif",
        "win_at_least_1_championship": false,
    },
    {
        "name": "Michael Porter Jr.",
        "image": "https://i.imgur.com/kvI7wbc.gif",
        "win_at_least_1_championship": true,
    },
    {
        "name": "Jordan Poole",
        "image": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fedbb2957-9c0b-41e1-b2fb-981324758b3d_498x474.gif",
        "win_at_least_1_championship": true,
       
    },
    {
        "name": "Jordan Clarkson",
        "image": "https://media1.giphy.com/media/5crQHcEni6EPT1SSi3/giphy.gif?cid=6c09b9527i6k526hd15h0d8sn4t0olct4dr89lmaquxoo9td&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "win_at_least_1_championship": false,
       
    }
   
]

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array; // Return the shuffled array
}

const shuffledPlayers = shuffle([...players]); // Correctly shuffled array
let currentPlayerIndex = 0; // Track which player is being displayed
let score = 0; // User's current score

// Function to update the question
function updateQuestion() {
    if (currentPlayerIndex >= shuffledPlayers.length) {
        currentPlayerIndex = 0; // Loop back to the start of the list
    }

    const currentPlayer = shuffledPlayers[currentPlayerIndex]; // Get the current player
    document.getElementById("player-image").src = currentPlayer.image;
    document.getElementById("question-text").innerText = `Did ${currentPlayer.name} win at least one NBA championship?`;
}

function handleAnswer(userAnswer) {
    const currentPlayer = shuffledPlayers[currentPlayerIndex];
    const isCorrect = (userAnswer === "high" && currentPlayer.win_at_least_1_championship) ||
                      (userAnswer === "low" && !currentPlayer.win_at_least_1_championship);

    console.log(`User answered: ${userAnswer}, Correct answer: ${isCorrect}`);

    if (isCorrect) {
        score++; // Increment score
        document.getElementById("score").innerText = "Score: " + score; // Update score display
        currentPlayerIndex++; // Move to the next player
        updateQuestion(); // Load the next question
    } else {
        endGame(); // If incorrect, end the game
    }
}

// Function to handle game over and transition to the defeat page
function endGame() {
    setTimeout(() => {
        window.location.href = `/defeat.html?score=${score}`; // Redirect with the current score
    }, 500); // Delay before redirecting to the defeat page
}

// Initialize the game
updateQuestion(); // Set the first question

// Attach event listeners to the buttons
document.getElementById("high-button").addEventListener("click", () => handleAnswer("high"));
document.getElementById("low-button").addEventListener("click", () => handleAnswer("low"));