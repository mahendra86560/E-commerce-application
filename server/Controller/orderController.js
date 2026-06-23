const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const {
      products,
      totalAmount,
      shippingAddress,
    } = req.body;

    const order = await Order.create({
      user: req.user.id,
      products,
      totalAmount,
      shippingAddress,
    });

    res.status(201).json({
  _id: order._id,
});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    })
      .populate({
        path: "products.product",
        select: "name image price",
      })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateOrderStatus = async (
  req,
  res
) => {
  try {
    const order =
      await Order.findById(
        req.params.id
      );

    if (!order) {
      return res
        .status(404)
        .json({
          message:
            "Order not found",
        });
    }

    order.orderStatus =
      req.body.status;

    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  updateOrderStatus,
};