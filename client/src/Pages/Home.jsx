import React from "react";
import "./Home.css"; // optional styling

function Home() {


  return (
    <div className="home-container">
      <h1 className="title">Shop by Categories</h1>

      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;