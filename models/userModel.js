const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  { username: { type: String, required: true }, bestScore: Number },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
