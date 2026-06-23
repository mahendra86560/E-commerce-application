const Cart = require("../models/Cart");

// Add to Cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const existingItem = await Cart.findOne({
      user: req.user.id,   // ✅ FIX HERE
      product: productId,
    });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();

      const updated = await existingItem.populate("product");
      return res.status(200).json(updated);
    }

    const cartItem = await Cart.create({
      user: req.user.id,   // ✅ FIX HERE
      product: productId,
      quantity: quantity || 1,
    });

    const populated = await cartItem.populate("product");

    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.id }) // ✅ FIX HERE
      .populate({
        path: "product",
        select: "name price image stock description",
      });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove Cart Item
const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeCartItem,
};