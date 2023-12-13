import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav className="navbar">
          <ul className="nav-links">
              <li>
                  <Link
                      
                      className="nav-link"
                      to="/"
                  >
                      Home
                  </Link>
              </li>
              <li>
                  <Link
                      
                      className="nav-link"
                      to="/articles"
                  >
                      Articles
                  </Link>
              </li>
              <li>
                  <Link
                      
                      className="nav-link"
                      to="/about"
                  >
                      {" "}
                      About
                  </Link>
              </li>
          </ul>
      </nav>
  );
}

export default Navbar