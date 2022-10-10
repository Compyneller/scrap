import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { cardData } from "../../data/cardData";
import "./CardComp.scss";
const CardComp = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {cardData.map((items, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="shadow card-comp" style={{ height: "100%" }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <img src={items.image} height={100} alt="" />

                  <h5>{items.name}</h5>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardComp;
