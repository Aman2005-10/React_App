import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CartItem() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const product = cart.find((item) => item.id.toString() === id);
  const navigate = useNavigate();

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        Back to Cart
      </button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: "200px" }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default CartItem;
