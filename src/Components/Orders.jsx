import React, { useState } from "react";
import mockOrders from "./ExOrders";
import "./Orders.css";

const Orders = () => {
  const [ordersData, setOrdersData] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // handle view order details
  const handleViewDetails = (orderId) => {
    const order = ordersData.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };

  // handle edit order status
  const handleEditStatus = (orderId, newStatus) => {
    setOrdersData(
      ordersData.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    setEditMode(false);
  };

  // handle delete order
  const handleDelete = (orderId) => {
    setOrdersData(ordersData.filter((order) => order.id !== orderId));
  };

  return (
    <div>
      <h1 className='ord'>Orders Management</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMERS</th>
              <th>ORDER DATE</th>
              <th>PRESENT STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td class="td-btn">
                  <button
                    className="view-details-btn"
                    style={{margin: "5px"}}
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Details
                  </button>
                  <button
                    className="edit-status-btn"
                    onClick={() => setEditMode(order.id)}
                  >
                    Edit Status
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="order-details-modal">
          <div className="order-details">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
            <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editMode && (
        <div className="edit-status-modal">
          <div className="edit-status-form">
            <h2>Edit Order Status</h2>
            <select
              value={ordersData.find((order) => order.id === editMode).status}
              onChange={(e) => handleEditStatus(editMode, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button
              className="cancel-btn"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;