// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // Ensures that Jest runs in a browser-like environment
};

// Test code snippet
const { sendData } = require("./saveScore.");
const firebase = require("firebase/app");
const { getDatabase, ref, push } = require("firebase/database");

jest.mock("firebase/app", () => {
  const initializeApp = jest.fn();
  return {
    initializeApp,
    apps: [{ name: "mockApp" }], // Mocking to prevent Firebase reinitialization
  };
});

jest.mock("firebase/database", () => ({
  getDatabase: jest.fn(() => ({
    ref: jest.fn(() => ({
      push: jest.fn(),
    })),
  })),
}));

describe("sendData", () => {
  beforeAll(() => {
    // Mock global document and window objects
    global.document = {
      querySelectorAll: jest.fn(() => [
        { value: "Test Name" },
        { value: "Test Mode" },
        { value: "100" },
      ]),
    };

    global.window = {};
  });

  it("should push data to Firebase with correct values", () => {
    const mockPush = jest.fn();
    const mockRef = {
      push: mockPush,
    };

    getDatabase().ref.mockReturnValue(mockRef);

    sendData();

    const expectedData = {
      name: "Test Name",
      mode: "Test Mode",
      score: "100",
    };

    expect(mockPush).toHaveBeenCalledWith(expectedData); // Ensure `push` was called with correct data
  });
});