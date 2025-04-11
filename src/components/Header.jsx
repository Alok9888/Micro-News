import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "/img/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 5; // Minimum scroll distance to trigger hide/show
  const navbarHeight = 70; // Adjust based on your header's height
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;

      // Check if user scrolled more than delta
      if (Math.abs(lastScrollTop - st) > delta) {
        if (st > lastScrollTop && st > navbarHeight) {
          // Scrolling down
          setIsHidden(true);
        } else {
          // Scrolling up
          setIsHidden(false);
        }
        setLastScrollTop(st);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    // console.log("Sections:", sections);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id); // Set the active section
            // console.log(`Section in view: ${id}`);
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

  useEffect(() => {
    import("bootstrap")
      .then((bootstrap) => {
        const offcanvasElements = document.querySelectorAll(".offcanvas");
        offcanvasElements.forEach((el) => new bootstrap.Offcanvas(el));
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, []);

  return (
    <header className={` ${isScrolled ? "scrolled" : ""} ${isHidden ? "nav-up" : "nav-down"}`}>
      <div className="topHeader">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Micro News Listing" />
            <span className="d-none ">Micro News Listing</span>
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
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
                  <HashLink smooth to="/#topStories" className={`nav-link ${isActive("#topStories") ? "active" : ""}`}>
                    Top Stories
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#featured" className={`nav-link ${isActive("#featured") ? "active" : ""}`}>
                    Featured News
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#newsCategories" className={`nav-link ${isActive("#newsCategories") ? "active" : ""}`}>
                    News Categories
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#newsGallery" className={`nav-link ${isActive("#newsGallery") ? "active" : ""}`}>
                    News Gallery
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink to="/#subscribe" className={`nav-link ${isActive("#subscribe") ? "active" : ""}`}>
                    Subscribe
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
