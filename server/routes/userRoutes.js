// const express = require("express");
// const router = express.Router();
// const {
//   registerUser,
//   loginUser
// } = require("../controllers/userController");

// router.post("/register", registerUser);
// router.post("/login", loginUser);

// module.exports = router;

const User = require("../models/User"); // adjust path if needed

// Existing registerUser and loginUser...

// Get user by ID
// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json({ user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   getUserById
// };

// const express = require("express");
// const router = express.Router();

// const {
//   registerUser,
//   loginUser,
//   getUserById
// } = require("../controllers/userController");

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/:id", getUserById); // 👈 to get user by ID

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserById,
  updatePreferences,
  getRecommendations // 👈 import controller function
} = require("../controllers/userController");

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);

// New route to update preferences
router.post("/:id/preferences", updatePreferences);  // 👈 preferences POST route
router.get("/:id/recommendations", getRecommendations);

module.exports = router;

