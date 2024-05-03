// Importing Jest and Firebase modules
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

// Jest mocks
jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
}));

jest.mock("firebase/database", () => ({
  getDatabase: jest.fn(),
}));

// Function to be tested
function registerUser(auth, email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Test suite for user registration
describe("User Registration", () => {
  beforeEach(() => {
    // Clear Jest mocks before each test
    jest.clearAllMocks();
  });

  it("should create a new user with email and password", async () => {
    // Mock data
    const auth = getAuth();
    const email = "test@example.com";
    const password = "SecurePassword123";

    // Mocking Firebase behavior
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {
        email,
      },
    });

    const result = await registerUser(auth, email, password);

    expect(result.user.email).toBe(email);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  it("should handle errors during user registration", async () => {
    const auth = getAuth();
    const email = "invalid-email";
    const password = "short";

    createUserWithEmailAndPassword.mockRejectedValue({
      code: "auth/invalid-email",
      message: "The email address is badly formatted.",
    });

    try {
      await registerUser(auth, email, password);
    } catch (error) {
      expect(error.code).toBe("auth/invalid-email");
      expect(error.message).toBe("The email address is badly formatted.");
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
    }
  });
});