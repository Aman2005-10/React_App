import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import "./styles/Productdetails.css"

function ProductDetail() {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <p style={{textAlign:"center"}}>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-title">Product Detail</h1>
      <img className="product-image" src={product.thumbnail} alt={product.title} />
      <h2 className="product-name">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: <span>${product.price}</span></p>
      <button className="Addtobtn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
