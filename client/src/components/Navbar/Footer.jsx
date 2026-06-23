import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";



function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">

          <h2>ShopEase</h2>

          <p>
            Your one-stop destination for
            fashion, electronics, accessories,
            and more.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/products">
                Products
              </a>
            </li>

            <li>
              <a href="/cart">
                Cart
              </a>
            </li>

            <li>
              <a href="/login">
                Login
              </a>
            </li>
          </ul>

        </div>

        {/* Customer Support */}
        <div className="footer-section">

          <h3>Customer Support</h3>

          <ul>
            <li>Email Support</li>
            <li>Help Center</li>
            <li>Order Tracking</li>
            <li>Returns & Refunds</li>
          </ul>

        </div>

        {/* Social Links */}
        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ShopEase. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;