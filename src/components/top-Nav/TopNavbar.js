import React from "react";
import logo from "../../images/logo.png";
import pic from "../../images/pic.jpg";

export const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} width="50%" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#skillsSection"
              >
                Skills
              </a>
              <a className="nav-link" href="#projectsSection">
                Projects
              </a>
              <a className="nav-link" href="#aboutMeSection">
                About me
              </a>
              <a className="nav-link" href="#contactMeSection">
                Contact me
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
