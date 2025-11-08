
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const areaRatings = {
  "Vasant Kunj": { Amenities: 90, Crime: 90, Commute: 80, Cost: 60, Employment: 80, Housing: 80, Health: 100, Schools: 100 },
  "Greater Kailash": { Amenities: 90, Crime: 90, Commute: 90, Cost: 50, Employment: 80, Housing: 80, Health: 100, Schools: 100 },
  "South Extension": { Amenities: 80, Crime: 80, Commute: 90, Cost: 50, Employment: 80, Housing: 70, Health: 90, Schools: 90 },
  "Defence Colony": { Amenities: 90, Crime: 90, Commute: 80, Cost: 50, Employment: 80, Housing: 80, Health: 100, Schools: 100 },
  "Hauz Khas": { Amenities: 90, Crime: 80, Commute: 80, Cost: 60, Employment: 90, Housing: 70, Health: 90, Schools: 90 },
  "Dwarka": { Amenities: 80, Crime: 60, Commute: 80, Cost: 80, Employment: 70, Housing: 80, Health: 80, Schools: 80 },
  "Janakpuri": { Amenities: 80, Crime: 80, Commute: 90, Cost: 70, Employment: 70, Housing: 80, Health: 90, Schools: 80 },
  "Pitampura": { Amenities: 80, Crime: 80, Commute: 80, Cost: 80, Employment: 70, Housing: 80, Health: 80, Schools: 80 },
  "Rohini": { Amenities: 80, Crime: 70, Commute: 80, Cost: 80, Employment: 70, Housing: 80, Health: 70, Schools: 80 },
  "Rajouri Garden": { Amenities: 90, Crime: 90, Commute: 90, Cost: 70, Employment: 80, Housing: 70, Health: 90, Schools: 80 },
  "Lajpat Nagar": { Amenities: 80, Crime: 70, Commute: 90, Cost: 60, Employment: 80, Housing: 70, Health: 80, Schools: 80 },
  "Karol Bagh": { Amenities: 80, Crime: 70, Commute: 90, Cost: 60, Employment: 80, Housing: 70, Health: 70, Schools: 80 },
  "Saket": { Amenities: 90, Crime: 90, Commute: 90, Cost: 60, Employment: 80, Housing: 70, Health: 90, Schools: 80 },
  "Mayur Vihar": { Amenities: 70, Crime: 70, Commute: 80, Cost: 80, Employment: 70, Housing: 70, Health: 80, Schools: 80 },
  "Shahdara": { Amenities: 70, Crime: 60, Commute: 70, Cost: 80, Employment: 60, Housing: 70, Health: 70, Schools: 70 },
};


// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User By ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updatePreferences = async (req, res) => {
  const { id } = req.params;
  const preferences = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { preferences },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    res.json({ message: "Preferences updated successfully!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while saving preferences." });
  }
};

const getRecommendations = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user || !user.preferences) {
      return res.status(404).json({ error: "User or preferences not found!" });
    }

    const preferences = user.preferences;

    // Calculate similarity score for each area
    const recommendations = Object.entries(areaRatings).map(([areaName, ratings]) => {
      let score = 0;
      Object.keys(preferences).forEach((param) => {
        const prefValue = preferences[param.toLowerCase()];
        const areaValue = ratings[param];
        if (prefValue !== undefined && areaValue !== undefined) {
          score += Math.abs(areaValue - prefValue);
        }
      });

      return { areaName, score };
    });

    // Sort areas by score (lower score = better match)
    recommendations.sort((a, b) => a.score - b.score);

    res.json({ recommendations: recommendations.slice(0, 5) }); // return top 5
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating recommendations." });
  }
};

module.exports = { registerUser, loginUser, getUserById, updatePreferences,getRecommendations};
