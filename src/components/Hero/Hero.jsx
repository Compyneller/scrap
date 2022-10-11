import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video from "../../assets/190802_17a_HD_36.mp4";
import FormComp from "./FormComp";
import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay muted loop />
      <Container>
        <Row>
          <Col sm={12} lg={6}></Col>
          <Col sm={12} lg={6}>
            <motion.div
              initial={{ x: -500, scale: 1.2, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 3,
              }}>
              <FormComp />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
