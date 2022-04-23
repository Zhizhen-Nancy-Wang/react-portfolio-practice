import React from "react";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

export const TopNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img src={logo} width="50%" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       <img src={logo} width="50%" alt="" />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <ul className="navbar-nav ms-auto">
    //         <div className="navbar-nav">
    //           <a
    //             className="nav-link active"
    //             aria-current="page"
    //             href="#skillsSection"
    //           >
    //             Skills
    //           </a>
    //           <a className="nav-link" href="#projectsSection">
    //             Projects
    //           </a>
    //           <a className="nav-link" href="#aboutMeSection">
    //             About me
    //           </a>
    //           <a className="nav-link" href="#contactMeSection">
    //             Contact me
    //           </a>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
