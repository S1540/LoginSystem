const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loginAndSignup");
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmpassword: String,
});

module.exports = mongoose.model("user", userSchema);
