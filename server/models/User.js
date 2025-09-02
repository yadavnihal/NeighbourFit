

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  preferences: {   // 👈 appended preferences field here
    amenities: Number,
    crimeRate: Number,
    commute: Number,
    costOfLiving: Number,
    employment: Number,
    housing: Number,
    health: Number,
    schools: Number
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
