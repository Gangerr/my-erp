import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling
import logo from '../images/logo.png'; // Import the logo image

const Sidebar = () => {
 const [isOpen, setIsOpen] = useState(false); // Sidebar content is initially hidden

 const toggleSidebar = () => {
    setIsOpen(!isOpen);
 };

 // Preload the image using useEffect
 useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = logo; // Use the imported logo
 }, []); // Empty dependency array means this effect runs once on mount

 return (
    <div>
      <button onClick={toggleSidebar} className="sidebar-toggle-btn">
        <FaBars />
      </button>
      <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="Erp-System Logo" className="logo-icon" />
          <span className="logo-text">Erp-System</span>
        </div>
        <NavLink to="/" activeClassName="active" onClick={toggleSidebar}>Dashboard</NavLink>
        <NavLink to="/products" activeClassName="active" onClick={toggleSidebar}>Products</NavLink>
        <NavLink to="/orders" activeClassName="active" onClick={toggleSidebar}>Orders</NavLink>
        <NavLink to="/calendar" activeClassName="active" onClick={toggleSidebar}>Calendar View</NavLink>
      </div>
    </div>
 );
};

export default Sidebar;