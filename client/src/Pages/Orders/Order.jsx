import { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5001/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(data);
    } catch (error) {
      console.error(
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Orders...</h2>;
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="empty-orders">
          No Orders Found
        </div>
      ) : (
        <div className="orders-container">
          {orders.map((order) => (
            <div
              key={order._id}
              className="order-card"
            >
              <div className="order-header">
                <h3>
                  Order ID:
                  {order._id}
                </h3>

                <span
                  className={`status ${order.orderStatus}`}
                >
                  {order.orderStatus}
                </span>
              </div>

              <div className="order-products">
                {order.products?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="order-item"
                    >
                      <img
                        src={
                          item.product?.image
                        }
                        alt={
                          item.product?.name
                        }
                      />

                      <div>
                        <h4>
                          {
                            item.product?.name
                          }
                        </h4>

                        <p>
                          Qty:
                          {item.quantity}
                        </p>

                        <p>
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {order.shippingAddress && (
                <div className="shipping-address">
                  <h4>
                    Delivery Address
                  </h4>

                  <p>
                    {
                      order
                        .shippingAddress
                        .fullName
                    }
                  </p>

                  <p>
                    {
                      order
                        .shippingAddress
                        .phone
                    }
                  </p>

                  <p>
                    {
                      order
                        .shippingAddress
                        .address
                    }
                  </p>

                  <p>
                    {
                      order
                        .shippingAddress
                        .city
                    }
                    ,
                    {" "}
                    {
                      order
                        .shippingAddress
                        .state
                    }
                  </p>

                  <p>
                    {
                      order
                        .shippingAddress
                        .pincode
                    }
                  </p>
                </div>
              )}

              <div className="order-footer">
                <h3>
                  Total:
                  ₹
                  {order.totalAmount}
                </h3>

                <p>
                  Ordered On:
                  {" "}
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;