import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { 
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/products"
      );

      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Our Products
      </h1>

      <div className="row g-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-md-4 col-lg-3"
          >
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {product.name}
                </h5>

                <p className="card-text text-muted">
                  {product.description}
                </p>

                <h4 className="text-success mb-3">
                  ₹{product.price}
                </h4>

                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;