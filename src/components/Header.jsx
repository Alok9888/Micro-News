import { Link } from "react-router-dom";
import logo from "/img/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigateToSection = (sectionId) => {
    // Navigate to the base URL with the hash
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      // If already on the homepage, scroll smoothly
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Add scroll event to handle class addition/removal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Dynamically import Bootstrap's JS for Offcanvas
    import("bootstrap").then((bootstrap) => {
      // Optionally, you can initialize it explicitly
      const offcanvasElements = document.querySelectorAll(".offcanvas");
      offcanvasElements.forEach((el) => new bootstrap.Offcanvas(el));
    });
  }, []);

  return (
    <header className={` ${isScrolled ? "scrolled" : ""}`}>
      <div className="topHeader">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Reliance Herald Logo" />
            <span>The Reliance Herald 2024</span>
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
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
                &nbsp;
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-between flex-grow-1">
                <li className="nav-item">
                  {/* scrolls to Featured */}
                  <button className="nav-link" onClick={() => navigateToSection("featured")}>
                    Leadership Highlights
                  </button>
                </li>
                <li className="nav-item">
                  {/* scrolls to Feaured glance */}
                  <a className="nav-link" href="#ar-wedding">
                    A&R Wedding
                  </a>
                </li>
                <li className="nav-item">
                  {/* scrolls to ARWedding */}
                  <Link className="nav-link" to="/">
                    2024 at a Glance
                  </Link>
                </li>
                <li className="nav-item">
                  {/* coming soon, scrolls to it's section */}
                  <Link className="nav-link" to="/">
                    Memories in Pictures
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
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
