// Example list of NBA players
const players = [
        {
            "name": "LeBron James",
            "image": "https://media1.giphy.com/media/vOoLte53vWFiO8lDxq/giphy.webp?cid=790b7611d6ltju8z8zqv77qwl1ufe6twwxj1y1wlec7b2e2i&ep=v1_gifs_search&rid=giphy.webp&ct=g",
            "points_per_game": 25.3,
            "average_more_than_20": true
        },
        {
            "name": "Kevin Durant",
            "image": "https://68.media.tumblr.com/0d33121472f9067db14ea1dc5acc958d/tumblr_or7n38UP6b1steui8o1_500.gif",
            "points_per_game": 27.4,
            "average_more_than_20": true
        },
        {
            "name": "Chris Paul",
            "image": "https://media1.tenor.com/m/F00W5rJTnokAAAAC/chris-paul-not-funny.gif",
            "points_per_game": 18.5,
            "average_more_than_20": false
        },
    
        {
            "name": "Stephen Curry",
            "image": "https://media3.giphy.com/media/88Wr2wNqXtyhh5pcNZ/200w.gif?cid=6c09b952ef0o0y805q3c1hx4okj1ftgxolqr0wymyh9t8k2v&ep=v1_gifs_search&rid=200w.gif&ct=g",
            "points_per_game": 29.4,
            "average_more_than_20": true
        },
        {
            "name": "Kyrie Irving",
            "image": "https://media2.giphy.com/media/2QVUfDCQZ3qb672Mt7/giphy.gif?cid=790b761110cf7xkftrg9dz2h93rzefb6jcq6ih46jjp2d7ib&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "points_per_game": 27.1,
            "average_more_than_20": true
        },
        {
            "name": "Luka Doncic",
            "image": "https://media.tenor.com/Hi0JQOAIStUAAAAM/luka-doncic-celebration.gif",
            "points_per_game": 32.3,
            "average_more_than_20": true
        },
        {
            "name": "Nikola Jokic",
            "image": "https://qph.cf2.quoracdn.net/main-qimg-f405604ead454c57759399a6667b1a7f",
            "points_per_game": 26.5,
            "average_more_than_20": true
        },
        {
            "name": "Ja Morant",
            "image": "https://media.tenor.com/6XiuclJ8kXsAAAAM/morant-ja-morant.gif",
            "points_per_game": 28.3,
            "average_more_than_20": true
        },
        {
            "name": "Derrick Rose",
            "image": "https://i.gifer.com/Fq98.gif",
            "points_per_game": 18.3,
            "average_more_than_20": false
        },
        {
            "name": "Shai Gilgeous-Alexander",
            "image": "https://media2.giphy.com/media/yAq0ppbTdeYZNNdO21/giphy.gif?cid=6c09b952ont28lfbawqmgpsluvqh031zkpfvjzpnghhnvzwm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
            "points_per_game": 31.3,
            "average_more_than_20": true
        },
        {
            "name": "Tyrese Haliburton",
            "image": "https://64.media.tumblr.com/f406d4bf771b42e8eb7070eec40659e6/67f0ac4f2acc493b-7a/s540x810/ebd799bf5ca561a13915ce2fb57f7c27209e790a.gifv",
            "points_per_game": 24.1,
            "average_more_than_20": true
        },
        {
            "name": "Draymond Green",
            "image": "https://i.gifer.com/fy1H.gif",
            "points_per_game": 8.1,
            "average_more_than_20": false
        },
        {
            "name": "Russell Westbrook",
            "image": "data:image/jpeg;base64,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",
            "points_per_game": 14.3,
            "average_more_than_20": false
        },
        {
            "name": "Jimmy Butler",
            "image": "https://media1.tenor.com/m/1qdHD-st57UAAAAC/jimmy-butler.gif",
            "points_per_game": 22.2,
            "average_more_than_20": true
        },
        {
            "name": "Joel Embiid",
            "image": "https://giffiles.alphacoders.com/219/219241.gif",
            "points_per_game": 33.2,
            "average_more_than_20": true
        },
        {
            "name": "Giannis Antetokounmpo",
            "image": "https://media.tenor.com/REzg-sSUdUsAAAAd/milwaukee-bucks-giannis-antetokounmpo.gif",
            "points_per_game": 29.5,
            "average_more_than_20": true
        },
        {
            "name": "Scottie Barnes",
            "image": "https://media.tenor.com/tbfQZF4uV1cAAAAd/scottie-barnes-scottie.gif",
            "points_per_game": 15.4,
            "average_more_than_20": false
        },
        {
            "name": "Devin Booker",
            "image": "https://media1.giphy.com/media/68G5uZeg93B8Kqrakz/source.gif",
            "points_per_game": 27.2,
            "average_more_than_20": true
        },
        {
            "name": "Mikal Bridges",
            "image": "https://media4.giphy.com/media/vwpKDtH1XGBc9k572x/giphy.gif",
            "points_per_game": 19.6,
            "average_more_than_20": false
        },
        {
            "name": "Damian Lillard",
            "image": "https://i.pinimg.com/originals/4a/6d/fd/4a6dfd1db4020023e0dc72f7d73da8a9.gif",
            "points_per_game": 31.1,
            "average_more_than_20": true
        },
        {
            "name": "Michael Porter Jr.",
            "image": "https://i.imgur.com/kvI7wbc.gif",
            "points_per_game": 17.1,
            "average_more_than_20": false
        },
        {
            "name": "Jordan Poole",
            "image": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fedbb2957-9c0b-41e1-b2fb-981324758b3d_498x474.gif",
            "points_per_game": 24.2,
            "average_more_than_20": true
        },
        {
            "name": "Jordan Clarkson",
            "image": "https://media1.tenor.com/images/30cb36c3789f6eb5a17691cf2adfb4f3/tenor.gif",
            "points_per_game": 22.4,
            "average_more_than_20": true
        },
        {
            "name": "Chris Paul",
            "image": "https://media1.tenor.com/m/F00W5rJTnokAAAAC/chris-paul-not-funny.gif",
            "points_per_game": 18.5,
            "average_more_than_20": false
        }
    ];

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Shuffle the list of players
const shuffledPlayers = shuffle([...players]); // Create a shuffled copy
let currentPlayerIndex = 0; // Track which player is being displayed
let score = 0; // User's current score

// Function to update the question
function updateQuestion() {
    if (currentPlayerIndex >= shuffledPlayers.length) {
        currentPlayerIndex = 0; // Loop back to the start of the list
    }

    const currentPlayer = shuffledPlayers[currentPlayerIndex]; // Get the current player
    document.getElementById("player-image").src = currentPlayer.image;
    document.getElementById("question-text").innerText = `Does ${currentPlayer.name} average more than 20 points a game?`;
}

// Function to handle the user's answer
function handleAnswer(userAnswer) {
    const currentPlayer = shuffledPlayers[currentPlayerIndex];
    const isCorrect = (userAnswer === "High" && currentPlayer.average_more_than_20) ||
                      (userAnswer === "Low" && !currentPlayer.average_more_than_20);

    if (isCorrect) {
        score++; // Increment score
        document.getElementById("score").innerText = "Score: " + score;
        currentPlayerIndex++; // Move to the next player
        updateQuestion(); // Update the question
    } else {
        endGame(); // Handle game over
    }
}

// Function to handle game over and transition to the defeat page
function endGame() {
    // Redirect to the defeat page after 3 seconds
    setTimeout(() => {
        window.location.href = `/defeat.html?score=${score}`; // Redirect with the current score
    }, 500); // 3-second delay
}

// Initialize the game
updateQuestion(); // Set the first question

// Attach event listeners to the buttons
document.getElementById("high-button").addEventListener("click", () => handleAnswer("High"));
document.getElementById("low-button").addEventListener("click", () => handleAnswer("Low"));