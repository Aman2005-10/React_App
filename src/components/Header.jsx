import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react"; // For managing menu toggle
import "./styles/Header.css";
import "./styles/Fontfamily.css"

function Header() {
  // Access cart items from Redux store
  const cart = useSelector((state) => state.cart.cart);

  // State to toggle menu visibility on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  return (
    <header className="header">
      <nav className="nav">
        <h2 style={{ color: "#ff6347" }}>
          <Link to="/" className="nav-heding-link">ShoppyGlobe</Link>
        </h2>

        {/* Hamburger Menu for Small Screens */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navbar Links */}
        <ul className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-links">Home</Link></li>
          <li><Link to="/cart" className="nav-links">Cart</Link></li>
          <li><Link to="/checkout" className="nav-links">CheckOut</Link></li>
          <div>
            <li>
              <Link className="nav-links" to="/cart">🛒</Link>
              <span>{cart.length}</span> {/* Display dynamic cart count */}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
