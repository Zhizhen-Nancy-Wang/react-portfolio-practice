import React from "react";
import Nancy from "../../images/Nancy.JPG";
import { Container, Row, Col } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="row" id="top">
          <Col md="6" className=" order-md-2 text-center">
            <img src={Nancy} width="50%" alt="" />
          </Col>

          <Col md="6" className="text-center mt-4" id="top-info">
            <h4>Hi, I am Nancy!</h4>
            <h1>Full-Stack Developer</h1>
            <p>hahahahhahahahahhahahahhahahahah</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
