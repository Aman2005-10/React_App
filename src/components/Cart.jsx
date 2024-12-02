import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, setSelectedItems } from "../actions/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const dispatch = useDispatch();

  // Function to handle item selection
  const handleSelectItem = (productId) => {
    const updatedSelection = selectedItems.includes(productId)
      ? selectedItems.filter((id) => id !== productId)
      : [...selectedItems, productId];

    dispatch(setSelectedItems(updatedSelection));
  };

  // Calculate total price of selected items
  const calculateTotalPrice = () => {
    return cart
      .filter((product) => selectedItems.includes(product.id))
      .reduce((total, product) => total + product.price, 0);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"2%"}}> Cart here...</h1>
      {cart.length === 0 ? (
        <p style={{textAlign:"center",marginTop:"2%"}}>Cart is empty</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {cart.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <Link
                  to={`/cart/${product.id}`}
                  style={{ textDecoration: "none", color: "black", flex: "1" }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  {product.title}
                </Link>

                {/* Checkbox for item selection */}
                <input
                  type="checkbox"
                  checked={selectedItems.includes(product.id)}
                  onChange={() => handleSelectItem(product.id)}
                />

                <button
                  onClick={() => handleRemoveFromCart(product)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "20px", fontWeight: "bold" }}>
            Total Price: ${calculateTotalPrice()}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
