import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="topHeader">
        <div className="container">
          <Link to="index.html" className="logo">
            <img src="img/logo.png" alt="Reliance Herald Logo" />
          </Link>
        </div>
      </div>

      <nav className="navbar static-top navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" to="/#leadership">
                    Leadership Insights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#ar-wedding">
                    AR Wedding
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#2024-at-a-glance">
                    2024 At A Glance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#other-initiatives">
                    Other Initiatives
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#year-end-memories">
                    Year-end Memories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#download-pdf">
                    Download PDF
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
