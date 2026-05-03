const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require('bcrypt');


module.exports.signup = async (req, res) => {
  try {
    let { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields required" });
    }

    email = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    console.log("Signup password:", password);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    console.log("User created:", user.email);

    return res.status(201).json({
      success: true,
      message: "Signup successful",
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    console.log("LOGIN BODY:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // ✅ Normalize email
    email = email.trim().toLowerCase();

    const user = await User.findOne({ email });

    console.log("User found:", user ? "YES" : "NO");

    if (!user) {
      return res.status(400).json({ message: 'Incorrect password or email' });
    }

    const auth = await bcrypt.compare(password, user.password);

    console.log("Entered password:", password);
    console.log("Stored hash:", user.password);
    console.log("Match:", auth);
    console.log(
  await bcrypt.compare("1234", "$2b$12$LKvaUQXHlt9w.qy5eX6cSekqWTOJDQkijQmXMDMF4OnXwWDW3hy1S")
);


    if (!auth) {
      return res.status(400).json({ message: 'Incorrect password or email' });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};