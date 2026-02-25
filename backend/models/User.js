const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  student_id: { type: String, unique: true, required: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "student" }, // 'student' or 'admin'
});

module.exports = mongoose.model("User", UserSchema);
