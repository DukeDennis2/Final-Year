
const { JSDOM } = require("jsdom");
const { test, beforeEach, expect } = require("@jest/globals");

// Setup JSDOM
beforeEach(() => {
  const dom = new JSDOM(`
    <html>
      <body>
        <div id="timer"></div>
        <img id="player-image" />
        <input id="guess-input" />
      </body>
    </html>
  `);
  global.window = dom.window;
  global.document = dom.window.document;
});

// Import the module you're testing
const { startTimer } = require("../path/to/guessplayer"); // Adjust path accordingly

// Test case example
test("should initialize the timer on window.onload", () => {
  // Mock the timer
  const mockStartTimer = jest.fn();
  window.onload = function () {
    const timerDisplay = document.getElementById("timer");
    const initialTime = 60; // Initial time in seconds
    startTimer(initialTime, timerDisplay);
  };

  // Trigger the onload event
  window.onload();

  expect(mockStartTimer).toHaveBeenCalled(); // Check if startTimer was called
});