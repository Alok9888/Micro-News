import { Link } from "react-router-dom";
import logo from "/img/logo.svg";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="topHeader">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Reliance Herald Logo" />
            <span>The Reliance Herald 2024</span>
          </Link>
        </div>
      </div>

      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <FiMenu />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                The Reliance Herald
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-between flex-grow-1">
                <li className="nav-item">
                  <Link className="nav-link active" to="/#leadership">
                    Leadership Highlights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#ar-wedding">
                    A&R Wedding
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#2024-at-a-glance">
                    2024 at a Glance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#memories">
                    Memories in Pictures
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#download-pdf">
                    Download The Reliance Herald
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
