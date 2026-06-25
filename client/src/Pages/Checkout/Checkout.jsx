import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate, useLocation } from "react-router-dom";



function Checkout() {

  const navigate = useNavigate();
  const location = useLocation();

  // Support two entry points:
  // 1. Buy Now -> location.state = { product }
  // 2. Cart checkout -> location.state = { cartItems, totalAmount }
  const { product, cartItems } = location.state || {};

  // Normalize everything into one array of items, regardless of entry point.
  // Quantity defaults to 1 since neither Cart nor ProductDetails track quantity yet.
  const items = product
    ? [{ ...product, quantity: 1 }]
    : (cartItems || []).map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

  // Always recalculate the total on the frontend from the actual items,
  // rather than trusting a totalAmount passed in from another page.
  const calculatedTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });

  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("No items to order");
      return;
    }

    try {
      setLoading(true);

      // Build the products array in the exact shape the backend Order model expects:
      // [{ product: <ObjectId>, quantity, price }]
      const orderProducts = items.map((item) => ({
        product: item._id,
        quantity: item.quantity,
        price: item.price,
      }));

      const { data } = await axiosInstance.post(
        "/orders",
        {
          products: orderProducts,
          totalAmount: calculatedTotal,
          shippingAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // If this was a cart checkout, clear the cart now that the order succeeded.
      if (cartItems) {
        localStorage.removeItem("cart");
      }

      alert("Order Placed Successfully");

      navigate(`/order-details/${data._id}`);

    } catch (error) {
      console.log(error);
      alert("Failed To Place Order");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="checkout-page">

      <div className="checkout-container">

        {/* Address Form */}

        <div className="checkout-form">

          <h2>Shipping Address</h2>

          <form onSubmit={placeOrder}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {
                loading
                  ?
                  "Placing Order..."
                  :
                  "Place Order"
              }
            </button>

          </form>

        </div>

        {/* Order Summary */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {items.map((item) => (
            <div className="summary-item" key={item._id}>
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="summary-item">

            <span>Shipping</span>

            <span>₹0</span>

          </div>

          <div className="summary-item total">

            <span>Total</span>

            <span>₹{calculatedTotal}</span>

          </div>

          <div className="payment-method">

            <h3>Payment Method</h3>

            <p>Cash On Delivery</p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Checkout;