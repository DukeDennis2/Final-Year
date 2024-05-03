const players = [
    { name: 'Michael Jordan', imageUrl: 'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-07/Michael%20Jordan%20Chicago%20Bulls.jpeg?itok=-pj5XNk9' },
    { name: 'Kyrie Irving', imageUrl: 'https://static01.nyt.com/images/2022/11/11/sports/11nba-kyrie-career1/11nba-kyrie-career1-mediumSquareAt3X.jpg' },
    { name: 'LeBron James', imageUrl: 'https://images.wsj.net/im-762053/?width=1278&size=1' },
    { name: 'Kareem Abdul-Jabbar', imageUrl: 'https://people.com/thmb/wdW5htq1U-k2FIYzB3MixtVGoxw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(854x149:856x151)/Kareem-Abdul-Jabbar-1-e467dd92f08c40b9b15b52949a348755.jpg' },
    { name: 'Karl Malone', imageUrl: 'https://lailluminator.com/wp-content/uploads/2023/09/Karl-Malone.jpg' },
    { name: 'Kobe Bryant', imageUrl: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/31/16934984613358.jpg' },
    { name: 'Dirk Nowitzki', imageUrl: 'https://www.usatoday.com/gcdn/-mm-/fe1d1337af30de09589968eee29bbb86972fb437/c=272-165-2441-3057/local/-/media/2017/03/07/USATODAY/USATODAY/636244960868675219-USATSI-9055920.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp' },
    { name: 'Wilt Chamberlain', imageUrl: 'https://whyy.org/wp-content/uploads/2022/03/wilt-chamberlain-100-points-ap.jpg' },
    { name: 'Julius Erving', imageUrl: 'https://cdn.nba.com/teams/legacy/www.nba.com/sixers/sites/sixers/files/gettyimages-96362519.jpg' },
    { name: 'Moses Malone', imageUrl: 'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2021-08/moses-malone-ftrjpg_36pqxq5c0w9o1xxa40z6edrt6.jpg?itok=VpljMs08' },
    { name: 'Shaquille ONeal', imageUrl: 'https://cdn.bleacherreport.net/images_root/slides/photos/000/984/343/1483215_original.jpg?1307002618' },
    { name: 'Carmelo Anthony', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Carmelo_Anthony_Nov_2013.jpg' },
    { name: 'Kevin Durant', imageUrl: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_3007%2Cy_992/MTk2MjQ3ODY5Njc2NTk0NzE1/durant-suns.jpg' },
    { name: 'Dan Issel', imageUrl: 'https://pbs.twimg.com/media/DqYcuQTWkAANDqv.jpg:large' },
    { name: 'Elvin Hayes', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Elvin_Hayes_1975.jpeg' },
    { name: 'Hakeem Olajuwon', imageUrl: 'https://cdn.britannica.com/19/200219-050-A33962F1/Hakeem-Olajuwon-1994.jpg'},
    { name: 'Oscar Robertson', imageUrl: 'https://pbs.twimg.com/media/B3Pqo4_CcAAgD_m?format=jpg&name=4096x4096'},
    { name: 'Dominique Wilkins', imageUrl: 'https://3ccc05558f.clvaw-cdnwnd.com/5fe89d59769de8788086bfaf6d217a35/200000055-7fe3c7fe3f/220ef3a2a1c451f24227426275ebacf1932.jpg?ph=3ccc05558f'},
    { name: 'George gervin', imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/san-antonio-spurs-george-gervin-andy-hayt.jpg'},
    { name: 'Tim Duncan', imageUrl: 'https://s.wsj.net/public/resources/images/PJ-BO973_SP_COU_DV_20130619174222.jpg'},
    { name: 'Paul Pierce', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Paul_Pierce_2008-01-13.jpg'},
    { name: 'John Havlicek', imageUrl: 'https://people.com/thmb/UxDKtO1h-VzFvkAAZftqjnOTa98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/john-havlicek-2-2000-556615e4586948848fc099d0c11b20ca.jpg'},
    { name: 'Kevin Garnett', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kevin_Garnett_2008-01-13.jpg/1200px-Kevin_Garnett_2008-01-13.jpg'},

    
    // Add more players with their images
];

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Initial setup and shuffle the players
shuffleArray(players);


let currentQuestionIndex = 0;
let score = 0;

  // Start the timer when the page loads
  window.onload = function () {
    var timerDisplay = document.getElementById('timer');
    var initialTime = 60; // Initial time in seconds
    startTimer(initialTime, timerDisplay);
};

function resetTimer(duration, display) {
    clearInterval(intervalId); // Clear any existing interval
    startTimer(duration, display); // Start the timer again
}

function loadNextPlayer() {
    if (currentQuestionIndex < players.length) {
        const name = players[currentQuestionIndex];
        document.getElementById('player-image').src = name.imageUrl;
        document.getElementById('guess-input').value = '';
        document.getElementById('result-message').textContent = '';
        //---resets the timer when next player on screen shows up
        resetTimer(initialTime, timerDisplay); 
        document.getElementById('high-score').textContent = 'High Score: ' + localStorage.getItem('highScore');

    } else {
        // Redirect to defeat.html with the score
        window.location.href = 'defeat.html?score=' + score;
    }
}


function checkGuess() {
    const currentPlayer = players[currentQuestionIndex];
    const userGuess = document.getElementById('guess-input').value.toLowerCase();
    const resultMessage = document.getElementById('result-message'); // Define resultMessage here

    if (userGuess === currentPlayer.name.toLowerCase()) {
        resultMessage.textContent = 'That is correct! Well done!';
        resultMessage.style.color = '#90EE90'; // Set text color to green
        score++;
        updateScore();
    } else {
        // Redirect to defeat.html with the score
        window.location.href = 'defeat.html?score=' + score;
    }

    currentQuestionIndex++;
}

function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
    localStorage.setItem('highScore', Math.max(score, localStorage.getItem('highScore') || 0));

}

// Initial load
loadNextPlayer(); 

// MY TIMER FUNCTION
 // Function to start the countdown timer
 function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId); // Stop the timer
            // Redirect to defeat.html with the score
            window.location.href = 'defeat.html?score=' + score;
        }
    }, 1000);
}
      