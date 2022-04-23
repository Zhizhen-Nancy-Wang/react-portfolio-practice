import React from "react";
import project2 from "../../images/project2.jpg";

export const About = () => {
  return (
    <div className="container" id="aboutMeSection">
      <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
        About me
      </div>
      <div className="row mt-5">
        <div className="col-md">
          <img src={project2} className="img-fluid" alt="" />
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
              Voluptatem pariatur in molestiae reprehenderit sunt unde maxime
              iste impedit obcaecati, consequuntur vero perferendis molestias
              quaerat maiores error dolore, vitae repellendus nesciunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
