import "../Css/Layout.css";
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'; // Import the Footer component

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar center-content">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid"
                alt="Mentimeter Logo"
              />
            </Link>
            <span style={{ fontFamily: "Arial, sans-serif" }}>Mentimeter</span>
          </div>

          {/* Links */}
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/add">Add Questions</Link>
              </li>
              <li>
                <Link to="/detail">Detail Questions</Link>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="navbar-buttons">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
