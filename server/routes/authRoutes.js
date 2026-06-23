const express = require("express");
const router = express.Router();

const { handleRegister,login, getProfile,} = require("../controller/authController");

const protect = require("../middleware/authMiddleware");

router.post("/register", handleRegister);

router.post("/login", login);

router.get("/profile", protect, getProfile);

module.exports = router;