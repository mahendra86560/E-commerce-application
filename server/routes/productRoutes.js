const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const protect = require("../middleware/authMiddleware");

// Public Routes
router.get("/", getProducts);

router.get("/:id", getProduct);

// Protected Routes
router.post("/",  createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;