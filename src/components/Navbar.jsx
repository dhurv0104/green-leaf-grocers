import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Green Leaf Grocers
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;