import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from"./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products/Product";
import ProductDetails from "./pages/Products/ProductDetails";

import Cart from "./pages/Cart/Cart";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Orders/Order";

import Checkout from "./pages/Checkout/Checkout";


function App() {
  return (
    <>
      <Navbar />

      <main className="app-container">
        <Routes>

          {/* Public Routes */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* Protected Routes */}

          <Route
            path="/cart"
            element={ <Cart />}
          />

          <Route
            path="/profile"
            element={
             
                <Profile />
              
            }
          /> 

          <Route
            path="/orders"
            element={
              
                <Orders />
              
            }
          />

          <Route
            path="/checkout"
            element={
              
                <Checkout />
              
            }
          />

        

         
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;