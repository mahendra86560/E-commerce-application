const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeCartItem,
} = require("../Controller/cartController");

const protect = require("../middleware/authMiddleware");

// Get Cart
router.get("/", protect, getCart);

// Add To Cart
router.post("/", protect, addToCart);

// Remove Item
router.delete("/:id", protect, removeCartItem);

module.exports = router;