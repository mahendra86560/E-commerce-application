import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(items);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item._id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems,
        totalAmount,
      },
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="card mb-3 shadow-sm"
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start cart-image"
                      />
                    </div>

                    <div className="col-md-9">
                      <div className="card-body">
                        <h5>{item.name}</h5>

                        <p className="text-muted">
                          {item.description}
                        </p>

                        <h5 className="text-success">
                          ₹{item.price}
                        </h5>

                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            removeFromCart(item._id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm p-4">
                <h4>Order Summary</h4>

                <hr />

                <div className="d-flex justify-content-between">
                  <span>Total Items</span>
                  <strong>
                    {cartItems.length}
                  </strong>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <span>Total Amount</span>
                  <strong className="text-success">
                    ₹{totalAmount}
                  </strong>
                </div>

                <button
                  className="btn btn-success mt-4"
                  onClick={handleCheckout}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;