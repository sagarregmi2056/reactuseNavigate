import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">MySite</div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/products">products</Link>
          </li>

          <li>
            <Link to="/category">category</Link>
          </li>

          <li>
            <Link to="/results">results</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
