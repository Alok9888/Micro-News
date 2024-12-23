import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "/img/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    // console.log("Sections:", sections);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id); // Set the active section
            console.log(`Section in view: ${id}`);
          }
        });
      },
      {
        threshold: [0.1, 0.5, 1.0], // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.hash]); // Use `location.hash` instead of `location.pathname`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const targetSection = document.getElementById(hash);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const isActive = (hash) => activeSection === hash.replace("#", "");

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
                  <HashLink smooth to="/#rewind" className={`nav-link ${isActive("#rewind") ? "active" : ""}`}>
                    Rewind 2024
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#featured" className={`nav-link ${isActive("#featured") ? "active" : ""}`}>
                    Leadership Highlights
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#24AtGlance" className={`nav-link ${isActive("#24AtGlance") ? "active" : ""}`}>
                    2024 at a Glance
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#gallery" className={`nav-link ${isActive("#gallery") ? "active" : ""}`}>
                    Memories in Pictures
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink to="/#download" className={`nav-link ${isActive("#download") ? "active" : ""}`}>
                    Download The Reliance Herald
                  </HashLink>
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
