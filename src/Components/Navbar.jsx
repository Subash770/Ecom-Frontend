import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">YourLogo</div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for products, brands, and more"
        />
      </div>

      <div className="navbar-right">
        <div
          className="dropdown"
          onMouseEnter={() => setLoginOpen(true)}
          onMouseLeave={() => setLoginOpen(false)}
        >
          <button className="login-btn">Login</button>
          {isLoginOpen && (
            <div className="dropdown-content">
              <ul>
                <li className="dropdown-item">New Customer Sign Up</li>
                <li className="dropdown-item">My Profile</li>
                <li className="dropdown-item">Orders</li>
                <li className="dropdown-item">Wishlist</li>
                <li className="dropdown-item">Rewards</li>
                <li className="dropdown-item">Gift Card</li>
              </ul>
            </div>
          )}
        </div>

        <div className="cart">Cart</div>
        <div className="seller">Become a Seller</div>

        <div
          className="dropdown"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button className="menu-btn">⋮</button>
          {isMenuOpen && (
            <div className="dropdown-content">
              <ul>
                <li className="dropdown-item">Notification Preferences</li>
                <li className="dropdown-item">24x7 Customer Care</li>
                <li className="dropdown-item">Advertise</li>
                <li className="dropdown-item">Download App</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
