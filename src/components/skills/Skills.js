import React from "react";

export const Skills = () => {
  return (
    <section className="container skills mt-5 py-5" id="skillsSection">
      <div className="sec-title fs-1 fw-bolder text-center m-auto">Skills</div>

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
  );
};
