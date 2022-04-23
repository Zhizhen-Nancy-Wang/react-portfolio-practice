import React from "react";
import project1 from "../../images/project1.jpg";

export const Projects = () => {
  return (
    <div className="prijects bg-warning py-5" id="projectsSection">
      <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
        Projects
      </div>

      <div className="pro-content">
        <div className="container mt-5">
          {/* <!-- =============project 1 section =============== --> */}
          <div className="row mt-5 py-5">
            <div className="col-md">
              <img src={project1} className="img-fluid" alt="" />
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
                  maxime iste impedit obcaecati, consequuntur vero perferendis
                  molestias quaerat maiores error dolore, vitae repellendus
                  nesciunt?
                </p>
              </div>
            </div>
          </div>

          {/* <!-- =============project 2 section  =============== --> */}
          <div className="row mt-5 py-5">
            <div className="col-md">
              <img src={project1} className="img-fluid" alt="" />
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
                  maxime iste impedit obcaecati, consequuntur vero perferendis
                  molestias quaerat maiores error dolore, vitae repellendus
                  nesciunt?
                </p>
              </div>
            </div>
          </div>
          {/* <!-- =============project 3 section  =============== --> */}

          <div className="row mt-5">
            <div className="col-md">
              <img src={project1} className="img-fluid" alt="" />
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
                  maxime iste impedit obcaecati, consequuntur vero perferendis
                  molestias quaerat maiores error dolore, vitae repellendus
                  nesciunt?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
