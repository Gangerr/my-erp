import React, { useState } from "react";
import mockProducts from "./ExProducts";
import "./Products.css";

const Products = () => {
  const [productsData, setProductsData] = useState(mockProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });
  const [addProduct, setAddProduct] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // handle form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // If edit mode is active, update the existing product
      setProductsData(productsData.map((product) => {
        if (product.id === editProduct.id) {
          return newProduct;
        }
        return product;
      }));
      setEditMode(false);
    } else {
      // If edit mode is not active, add a new product
      setProductsData([...productsData, {id: productsData.length+1, ...newProduct}]);
    }
    setNewProduct({ name: "", category: "", price: 0, stock: 0 });
    setAddProduct(false);
    setEditProduct(null);
  };

  // handle product delete
  const handleDelete = (productId) => {
    setProductsData(productsData.filter((product) => product.id !== productId));
  };

  // handle edit product
  const handleEdit = (productId) => {
    const productToEdit = productsData.find((product) => product.id === productId);
    setEditProduct(productToEdit);
    setNewProduct(productToEdit);
    setEditMode(!editMode);
  };
  return (
    <div>
      <h1>Products Management</h1>
      <div className="add-product-btn-container">
        <button className="add-product" onClick={() => setAddProduct(!addProduct)}>
          Add Product
        </button>
      </div>
      {addProduct || editMode ? (
        <form onSubmit={handleSubmit} className="product-form">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="form-input"
            required
          />
          {editMode ? (
            <>
              <button type="submit" className="add-product">Save Changes</button>
              <button type="button" className="add-product" onClick={() => { setEditMode(false); setAddProduct(false); setNewProduct({ name: "", category: "", price: 0, stock: 0 }) }}>Cancel</button>
            </>
          ) : (
            <button type="submit" className="add-product">Submit</button>
          )}
        </form>
      ) : null}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>PRICE(₹)</th>
              <th>STOCKS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td class="td-btn">
                  <button className="edit" onClick={() => handleEdit(product.id)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
