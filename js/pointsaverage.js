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
            "image": 'https://media1.tenor.com/m/4Z_Kpe0NidAAAAAC/russell-westbrook-basketball.gif',
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