// Import required testing tools
const { JSDOM } = require("jsdom");
const { beforeEach, test, expect } = require("@jest/globals");

let document, window;

// Set up the DOM and game configuration before each test
beforeEach(() => {
  const dom = new JSDOM(`
    <html>
      <body>
        <img id="player-image" />
        <input id="guess-input" />
        <div id="result-message"></div>
        <div id="score"></div>
        <div id="high-score"></div>
        <div id="timer"></div>
      </body>
    </html>
  `);
  document = dom.window.document;
  window = dom.window;

  // Mock Local Storage
  const localStorageMock = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value.toString();
    },
    clear() {
      this.store = {};
    },
  };
  window.localStorage = localStorageMock;

  // Reset the game state
  currentQuestionIndex = 0;
  score = 0;
});

// Import the game logic after setting up the DOM
const { loadNextPlayer, checkGuess, startTimer, resetTimer } = require("../js/guessplayer");

// Tests
test("loadNextPlayer should set the correct player image", () => {
  loadNextPlayer();
  const playerImage = document.getElementById("player-image").src;
  expect(playerImage).toContain("expected-image-url"); // Adjust this with the correct expected image URL
});

test("checkGuess with correct guess should increase the score", () => {
  document.getElementById("guess-input").value = players[0].name; // Correct guess
  checkGuess();
  expect(score).toBe(1); // Score should increase
});

test("checkGuess with incorrect guess should redirect to defeat.html with score", () => {
  // Mocking the redirect
  window.location = { href: "" };

  document.getElementById("guess-input").value = "Wrong Guess";
  checkGuess();

  expect(window.location.href).toContain("defeat.html?score=0"); // Should redirect to defeat
});

test("startTimer should trigger defeat when time runs out", (done) => {
  // This test involves asynchronous code
  window.location = { href: "" };

  const timerDisplay = document.getElementById("timer");
  startTimer(1, timerDisplay); // Timer set to 1 second for test

  setTimeout(() => {
    expect(window.location.href).toContain("defeat.html?score=0"); // Redirect to defeat on timer end
    done(); // Indicate test completion
  }, 2000); // Wait for timer to trigger
});

test("resetTimer should restart the timer with the specified duration", () => {
  const timerDisplay = document.getElementById("timer");
  const duration = 10; // 10-second timer

  resetTimer(duration, timerDisplay);

  expect(timerDisplay.textContent).toBe("00:10"); // Timer should reset to 10 seconds
});