import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/Fontfamily.css"

function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const selectedItems = useSelector((state) => state.cart.selectedItems); // Get selected items from Redux

  // Function to calculate total price of selected items
  const calculateTotalPrice = () => {
    return cart
      .filter((product) => selectedItems.includes(product.id))
      .reduce((total, product) => total + product.price, 0);
  };

  // Total cost includes any additional charges, e.g., tax or shipping
  const totalCost = calculateTotalPrice();
  const tax = totalCost * 0.1;  // Example: 10% tax
  const shipping = 10;          // Example: flat $10 shipping fee
  const finalTotal = totalCost + tax + shipping;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{textAlign:"center" , marginTop:"2%"}}>Checkout</h2>

      {/* Cart Items */}
      <div>
        <h3 style={{textAlign:"center" , marginTop:"2%"}}>Items in your cart</h3>
        {cart.length === 0 ? (
          <p style={{textAlign:"center" , marginTop:"2%"}}>Your cart is empty</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {cart
              .filter((product) => selectedItems.includes(product.id))
              .map((product) => (
                <li
                  key={product.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    {product.title}
                  </div>
                  <div>${product.price}</div>
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Payment Summary */}
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        <h3>Payment Summary</h3>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
          <span>Subtotal</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff6347",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
