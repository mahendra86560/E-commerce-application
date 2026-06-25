# 🛒 E-Commerce Application

A full-stack **MERN E-Commerce Application** that allows users to browse products, register/login securely, add items to their cart, place orders, and manage their shopping experience. The application includes authentication, product management, and a responsive user interface.

-----

# 🚀 Features

## 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Search Products
- Filter Products by Category
- View Product Details
- Add to Cart
- Update Cart Quantity
- Remove Items from Cart
- Place Orders
- View Order History
- Responsive Design

---

## 🛠️ Admin Features

- Admin Login
- Add New Products
- Update Products
- Delete Products
- Manage Orders
- Manage Users
- Dashboard Overview

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

# 📂 Folder Structure

```
E-commerce-application/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# 📦 Installation

## Clone the Repository

```bash
git clone https://github.com/mahendra86560/E-commerce-application.git
```

```bash
cd E-commerce-application
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶️ Running the Application

## Backend

```bash
cd server
npm run dev
```

Runs at:

```
http://localhost:5000
```

---

## Frontend

```bash
cd client
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Product Details |
| POST | /api/products | Add Product (Admin) |
| PUT | /api/products/:id | Update Product (Admin) |
| DELETE | /api/products/:id | Delete Product (Admin) |

---

## Cart

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/cart | Get User Cart |
| POST | /api/cart | Add Item to Cart |
| PUT | /api/cart/:id | Update Cart Item |
| DELETE | /api/cart/:id | Remove Cart Item |

---

## Orders

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/orders | Place Order |
| GET | /api/orders/my | View My Orders |
| GET | /api/orders | View All Orders (Admin) |
| PUT | /api/orders/:id | Update Order Status |

---

# 🔐 Authentication

The application uses:

- JWT (JSON Web Token)
- bcryptjs Password Hashing
- Protected Routes
- Authorization Middleware

---

# 💾 Database Collections

- Users
- Products
- Cart
- Orders

---------------------------------------------

# 🌐 Deployment

## Frontend (Vercel)

```bash
npm run build
```

Deploy the generated build to **Vercel**.

---

## Backend (Render)

Set the following environment variables:

```env
PORT

MONGO_URI

JWT_SECRET
```

Deploy the backend to **Render**.

---

# 📜 Available Scripts

### Frontend

```bash
npm run dev
```

```bash
npm run build
```

### Backend

```bash
npm run dev
```

```bash
npm start
```

---

# 🚀 Future Enhancements

- ❤️ Wishlist
- ⭐ Product Reviews & Ratings
- 💳 Stripe/Razorpay Payment Gateway
- 📦 Order Tracking
- 🔔 Email Notifications
- 📱 Progressive Web App (PWA)
- 📊 Sales Analytics Dashboard
- 🎟️ Coupon & Discount System

---

# 🤝 Contributing

1. Fork the repository

```bash
git checkout -b feature-name
```

2. Commit your changes

```bash
git commit -m "Added new feature"
```

3. Push to GitHub

```bash
git push origin feature-name
```

4. Create a Pull Request

---

# 👨‍💻 Author

**Mahendra Kumar**

- GitHub: https://github.com/mahendra86560
- LinkedIn: https://www.linkedin.com/in/ngv-mahendra-kumar

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
