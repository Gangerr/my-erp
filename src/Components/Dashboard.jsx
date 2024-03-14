
import React from "react";
import Cards from "./Bars";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="cards">
        <Cards title="Total Products" count={10} button_name="Product Details" path="/products"/>
        <Cards title="Total Orders" count={7} button_name="Order Details" path="/orders"/>
      </div>
    </div>
  );
};

export default Dashboard;
