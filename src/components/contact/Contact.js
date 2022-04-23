import React from "react";

export const Contact = () => {
  return (
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
  );
};
