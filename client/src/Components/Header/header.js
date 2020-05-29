import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 border-bottom border-secondary sticky-top">
      <div className="container p-0">
        <Link to="/" className="navbar-brand p-3 bg-secondary text-light">
          Kelsie Langston
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="form-inline ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={
                    location.hash === "" || location.hash === "#About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#About"
                >
                  About |
                </a>
                {/* <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} >About |<span className="sr-only">(current)</span></Link> */}
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.hash === "#Portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#Portfolio"
                >
                  Portfolio |
                </a>
                {/* <Link
                  to="/portfolio"
                  className={
                    location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio |
                </Link> */}
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.hash === "#Technologies"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#Technologies"
                >
                  Technologies |
                </a>
                {/* <Link
                  to="/technologies"
                  className={
                    location.pathname === "/technologies"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Technologies |
                </Link> */}
              </li>
              <li className="nav-item">
                <a
                  className={
                    location.hash === "#Contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#Contact"
                >
                  Contact
                </a>
                {/* <Link
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
