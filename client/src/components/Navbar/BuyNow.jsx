import { useState } from "react";
import axios from "axios";
import "./BuyNow.css";

function BuyNow({ product }) {
  const [showForm, setShowForm] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5001/api/orders",
        {
          products: [
            {
              product:
                product._id,
              quantity: 1,
              price:
                product.price,
            },
          ],

          shippingAddress:
            formData,

          totalAmount:
            product.price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      );

      alert(
        "Order placed successfully"
      );

      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="buy-btn"
        onClick={() =>
          setShowForm(true)
        }
      >
        Buy Now
      </button>

      {showForm && (
        <div className="modal">
          <form
            className="address-form"
            onSubmit={
              handleSubmit
            }
          >
            <h2>
              Delivery Address
            </h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={
                handleChange
              }
              required
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={
                handleChange
              }
              required
            />

            <button type="submit">
              Place Order
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default BuyNow;