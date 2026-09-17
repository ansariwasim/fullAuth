import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username must be unique"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email must be required"],
    unique: [true, "Email must be unique"],
    trim: true,
    lowerCase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password must be required"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;