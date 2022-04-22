import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* <!-- ============navbar============ --> */}
        <div className="top-nav" id="topNavBarSection">
          <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="images/logo.png" width="50%" alt="" />
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
          {/* <!-- ============hero section============ --> */}
          <div className="hero">
            <div className="container">
              <div className="row" id="top">
                <div className="col-md-6 order-md-2 text-center">
                  <img src="images/Nancy.JPG" width="50%" alt="" />
                </div>

                <div className="col-md-6 text-center mt-4" id="top-info">
                  <h4>Hi, I am Nancy!</h4>
                  <h1>Full-Stack Developer</h1>
                  <p>hahahahhahahahahhahahahhahahahah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- =============skills section =============== --> */}
        <section className="container skills mt-5 py-5" id="skillsSection">
          <div className="sec-title fs-1 fw-bolder text-center m-auto">
            Skills
          </div>

          <div className="sec-content fs-1 mt-5 d-flex justify-content-between flex-wrap">
            <span className="d-flex flex-column align-items-center">
              <img src="images/html.png" width="100px" alt="" /> HTML
            </span>
            <span className="d-flex flex-column align-items-center">
              <img src="images/css.png" width="100px" alt="" /> CSS
            </span>
            <span className="d-flex flex-column align-items-center">
              <img src="images/js.png" width="100px" alt="" />
              JavaScript
            </span>
          </div>
        </section>

        {/* <!-- =============project section =============== --> */}
        <div className="prijects bg-warning py-5" id="projectsSection">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Projects
          </div>

          <div className="pro-content">
            <div className="container mt-5">
              {/* <!-- =============project 1 section =============== --> */}
              <div className="row mt-5 py-5">
                <div className="col-md">
                  <img src="images/project1.jpg" className="img-fluid" alt="" />
                </div>

                <div className="col-md mt-5 mt-md-0">
                  <h2>my portfolio website</h2>

                  <div className="links">
                    <a href="#" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>

                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                    <div className="mt-3 fw-bolder">Tech:HTML,CSS</div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem pariatur in molestiae reprehenderit sunt unde
                      maxime iste impedit obcaecati, consequuntur vero
                      perferendis molestias quaerat maiores error dolore, vitae
                      repellendus nesciunt?
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- =============project 2 section  =============== --> */}
              <div className="row mt-5 py-5">
                <div className="col-md">
                  <img src="images/project1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-md mt-5 mt-md-0">
                  <h2>my portfolio website</h2>

                  <div className="links">
                    <a href="#" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>

                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                    <div className="mt-3 fw-bolder">Tech:HTML,CSS</div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem pariatur in molestiae reprehenderit sunt unde
                      maxime iste impedit obcaecati, consequuntur vero
                      perferendis molestias quaerat maiores error dolore, vitae
                      repellendus nesciunt?
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- =============project 3 section  =============== --> */}

              <div className="row mt-5">
                <div className="col-md">
                  <img src="images/project1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-md mt-5 mt-md-0">
                  <h2>my portfolio website</h2>

                  <div className="links">
                    <a href="#" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>

                    <a href="#" target="_blank">
                      <i className="fab fa-chrome"></i>
                    </a>
                    <div className="mt-3 fw-bolder">Tech:HTML,CSS</div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem pariatur in molestiae reprehenderit sunt unde
                      maxime iste impedit obcaecati, consequuntur vero
                      perferendis molestias quaerat maiores error dolore, vitae
                      repellendus nesciunt?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- =============about me  =============== --> */}
        <div className="container" id="aboutMeSection">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            About me
          </div>
          <div className="row mt-5">
            <div className="col-md">
              <img src="images/project1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md mt-5 mt-md-0">
              <h2>my portfolio website</h2>

              <div className="links">
                <a href="#" target="blank">
                  <i className="fab fa-github"></i>
                </a>

                <a href="#" target="blank">
                  <i className="fab fa-chrome"></i>
                </a>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem pariatur in molestiae reprehenderit sunt unde
                  maxime iste impedit obcaecati, consequuntur vero perferendis
                  molestias quaerat maiores error dolore, vitae repellendus
                  nesciunt?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============= contact me =============== --> */}

        <div className="contact-icons rounded" id="contactMeSection">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5 py-5">
            Contact me
          </div>

          <div className="icons mt-5">
            <a href="mailto:myemail@gmail.com" target="_blank">
              <i className="far fa-envelope"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* <!-- =============footer =============== --> */}
        <footer className="text-center py- mt-5 bg-dark text-light" id="footer">
          &copy; copyright, all right reserved|| made with ❤ by Nancy
          <a href="#topNavBarSection">
            <div className="up">
              <i className="fas fa-sort-up"></i>
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
