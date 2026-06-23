import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Products/Product";
import ProductDetails from "./Pages/Products/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile/Profile";
import Orders from "./Pages/Orders/Order";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;