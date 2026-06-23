import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Checkout() {

  const navigate = useNavigate();

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

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5001/api/orders",
        {
          shippingAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Order Placed Successfully");

      // 🔥 CHANGE IS HERE (THIS IS WHAT FIXES YOUR FLOW)
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

          <div className="summary-item">

            <span>Items Total</span>

            <span>₹{product.price * product.quantity}</span>

          </div>

          <div className="summary-item">

            <span>Shipping</span>

            <span>₹0</span>

          </div>

          <div className="summary-item total">

            <span>Total</span>

            <span>₹{product.price * product.quantity}</span>

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