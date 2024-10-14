import { useEffect, useState } from "react";
import ProfilePhoto from "../Shared/ProfilePhoto";
import { HEADER_DATA } from "../../data/HEADER";
import "./Header.css";

interface Props {
  onNavItemClick: (elId: string) => void;
}

const Header = ({ onNavItemClick }: Props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("sideNav");
    if (navbar) {
      navbar.classList.add("animate-navbar");
    }
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none navbar-logo">
          {HEADER_DATA.title}
        </span>
        <span className="d-none d-lg-block">
          <ProfilePhoto className="img-fluid img-profile rounded-circle mx-auto mb-2 fade-in" />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={isNavbarOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse ${isNavbarOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {HEADER_DATA.links.map((navLink) => (
            <li
              key={navLink.id}
              className="nav-item animated-link"
              onClick={() => {
                onNavItemClick(navLink.linkId);
                setIsNavbarOpen(false); // Close navbar on link click
              }}
            >
              <a className="nav-link js-scroll-trigger" href={navLink.linkId}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
