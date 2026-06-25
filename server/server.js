
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Allow the stable production domain, localhost for local dev,
// AND any Vercel preview/deployment URL that belongs to this project
// (e.g. e-commerce-application-4h34-xxxxx-mahendra86560s-projects.vercel.app)
const allowedOrigins = [
  "https://e-commerce-application-4h34.vercel.app",
  "http://localhost:5173",
];

const vercelProjectPattern = /^https:\/\/e-commerce-application-4h34(-[a-z0-9]+)?(-git-main)?-mahendra86560s-projects\.vercel\.app$/;

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. server-to-server, curl, Postman)
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      vercelProjectPattern.test(origin)
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS: " + origin));
  },
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

