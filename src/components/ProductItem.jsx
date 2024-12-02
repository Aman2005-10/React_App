import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "./styles/Productitem.css";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { thumbnail, title, price } = product;

  return (
    <div className="product-item">
      <Link to={`/products/${product.id}`} style={{textDecoration:"none"}}>
        <div>
          <img src={thumbnail} alt={title} />
          <h3 style={{color:"black"}}>{title}</h3>
          <p>Price: ${price}</p>
        </div>
      </Link>
      <button className="Addtobtn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
