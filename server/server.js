const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const handleRegister = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes")
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth",handleRegister);

app.use(
  "/api/products",productRoutes);

app.use(
  "/api/cart",cartRoutes);

app.use(
  "/api/orders",orderRoutes
);

app.use(
  "/api/payments",paymentRoutes);

app.listen(5001, () => {
  console.log(
    "Server running on port 5001"
  );
});