import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FreshMart</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/Checkout">Checkout</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;