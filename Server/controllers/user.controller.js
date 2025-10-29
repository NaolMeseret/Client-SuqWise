const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET = process.env.JWT_SECRET || "please_change_this_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// ------------------- Existing register/login -------------------
async function register(req, res) {
  try {
    const { email, password, first_name, last_name, phone } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const existing = await User.findByEmail(email);
    if (existing) {
      return res.status(409).json({ error: "User with this email already exists" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const createdUser = await User.createUser({
      email,
      password_hash,
      first_name: first_name || null,
      last_name: last_name || null,
      phone: phone || null,
    });

    const token = jwt.sign({ id: createdUser.id, email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(201).json({ token, user: createdUser });
  } catch (error) {
    if (error && error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "User with this email already exists" });
    }
    console.error("User registration error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    const { password_hash, ...safeUser } = user;
    return res.json({ token, user: safeUser });
  } catch (error) {
    console.error("User login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// ------------------- New update/delete -------------------

// Update user (password optional)
async function updateUser(req, res) {
  try {
    const { first_name, last_name, phone, password } = req.body || {};
    const updateData = { first_name, last_name, phone };

    // If password provided, hash it
    if (password) {
      updateData.password_hash = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.updateUser(req.params.id, updateData);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(updatedUser);
  } catch (error) {
    console.error("User update error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Delete user
async function deleteUser(req, res) {
  try {
    const success = await User.deleteUser(req.params.id);
    if (!success) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("User delete error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  register,
  login,
  updateUser,
  deleteUser,
};
