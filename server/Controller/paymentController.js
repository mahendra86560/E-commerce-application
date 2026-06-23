const Payment =
  require("../models/Payment");

// Create Payment
const createPayment = async (
  req,
  res
) => {
  try {
    const payment =
      await Payment.create({
        user: req.user.id,
        order: req.body.order,
        amount: req.body.amount,
        paymentMethod:
          req.body.paymentMethod,
      });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Payment Success
const paymentSuccess = async (
  req,
  res
) => {
  try {
    const payment =
      await Payment.findByIdAndUpdate(
        req.params.id,
        {
          paymentStatus: "Success",
        },
        {
          new: true,
        }
      );

    res.json(payment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPayment,
  paymentSuccess,
};