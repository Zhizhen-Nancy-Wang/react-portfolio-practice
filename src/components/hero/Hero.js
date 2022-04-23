import React from "react";
import Nancy from "../../images/Nancy.JPG";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row" id="top">
          <div className="col-md-6 order-md-2 text-center">
            <img src={Nancy} width="50%" alt="" />
          </div>

          <div className="col-md-6 text-center mt-4" id="top-info">
            <h4>Hi, I am Nancy!</h4>
            <h1>Full-Stack Developer</h1>
            <p>hahahahhahahahahhahahahhahahahah</p>
          </div>
        </div>
      </div>
    </div>
  );
};
