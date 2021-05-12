import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunCard from "./FunCard";
let games = [
  {
    title: "Rock Paper Scissors",
    image: "/images/rock-paper-scissors.svg",
    link: "/rock-paper-scissors",
  },
  {
    title: "Tic Tac Toe",
    image: "/images/tic-tac-toe.png",
    link: "/tic-tac-toe",
  },
  {
    title: "Snake Game",
    image: "/images/snake.png",
    link: "/snake-game",
  },
];
function FunSection() {
  return (
    <Container className="py-5">
      <h1 className="text-center">Have Some fun!!!</h1>
      <hr />
      <Row>
        {games.map(({ title, image, description, link }) => (
          <Col md={4} key={title} className="py-3">
            <FunCard
              title={title}
              image={image}
              description={description}
              link={link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FunSection;
