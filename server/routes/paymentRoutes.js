const express = require("express");
const router = express.Router();

const {
  createPayment,
  paymentSuccess,
} = require("../controller/paymentController");

const protect = require("../middleware/authMiddleware");

// Create Payment
router.post("/", protect, createPayment);

// Update Payment Status
router.put(
  "/success/:id",
  protect,
  paymentSuccess
);

module.exports = router;