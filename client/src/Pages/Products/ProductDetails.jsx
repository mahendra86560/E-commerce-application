import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";



function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/products/${id}`
      );

      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    // Save product to cart
    const cart = JSON.parse(
      localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    navigate("/cart");
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { product },
    });
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        Loading...
      </div>
    );
  }

  return (
   <div className="amazon-container">
  <div className="amazon-card">

    
    {/* Main Image */}
    <div className="main-image-section">
      <img
        src={product.image}
        alt={product.name}
        className="main-product-image"
      />
    </div>

    {/* Product Info */}
    <div className="product-info-section">

      <h1 className="product-name">
        {product.name}
      </h1>

      <div className="rating-section">
        ⭐⭐⭐⭐☆ <span>(4.5)</span>
      </div>

      <hr />

      <h2 className="price">
        ₹{product.price}
      </h2>

      <p className="discount">
        Save 20% with special offer
      </p>

      <div className="stock">
        In Stock
      </div>

      <div className="offers">
        <h5>Available Offers</h5>

        <ul>
          <li>🏷️ 10% Instant Discount</li>
          <li>💳 No Cost EMI Available</li>
          <li>🚚 Free Delivery</li>
          <li>🔄 7 Days Replacement</li>
        </ul>
      </div>

      <div className="description-box">
        <h5>About this item</h5>
        <p>{product.description}</p>
      </div>

      <div className="button-group">
        <button
          className="add-cart-btn me-5"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <button
          className="buy-now-btn  bg-primary text-white"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>

    </div>

  </div>
</div>
  );
}

export default ProductDetails;