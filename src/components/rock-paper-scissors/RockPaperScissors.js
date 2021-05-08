import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

function RockPaperScissors() {
  const [state, setState] = useState({
    winner: "",
    userChoise: "",
    computerChoise: "",
    userScore: 0,
    computerScore: 0,
  });

  function SetChoise(choise) {
    const array = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * array.length);
    let comChoise = array[random];
    let currentWinner = Winner(choise, comChoise);
    console.log(choise + " " + comChoise + " " + currentWinner);
    let tempUserScore = state.userScore;
    let tempComputerScore = state.computerScore;
    if (currentWinner === 1) {
      tempUserScore += 1;
    } else if (currentWinner === -1) {
      tempComputerScore += 1;
    }
    setState({
      userChoise: choise,
      computerChoise: comChoise,
      winner: currentWinner,
      userScore: tempUserScore,
      computerScore: tempComputerScore,
    });
  }
  function Winner(user, computer) {
    console.log("* ");
    console.log(user + " " + computer);
    if (user === computer) {
      return 0;
    }

    if (user === "Rock") {
      if (computer === "Scissor") {
        return 1;
      } else {
        return -1;
      }
    }

    if (user === "Paper") {
      if (computer === "Rock") {
        return 1;
      } else {
        return -1;
      }
    }

    if (user === "Scissor") {
      if (computer === "Paper") {
        return 1;
      } else {
        return -1;
      }
    }
  }
  return (
    <>
      <Container className="text-center py-3  .justify-content-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1>Make a Choice</h1>
            <hr />
            <div className="d-flex justify-content-between my-0">
              <p>
                Your Score: <b>{state.userScore}</b>
              </p>
              <p>
                Computer Score:<b>{state.computerScore}</b>
              </p>
            </div>
            <hr />
            <Row>
              <Col xs={4} className="">
                <img
                  src="/images/rock.png"
                  alt="Rock"
                  width="100%"
                  className="game-object"
                  onClick={() => SetChoise("Rock")}
                />
              </Col>
              <Col xs={4} className="">
                <img
                  src="/images/paper.png"
                  alt="Paper"
                  width="100%"
                  className="game-object"
                  onClick={() => SetChoise("Paper")}
                />
              </Col>
              <Col xs={4} className="">
                <img
                  src="/images/scissor.png"
                  alt="Scissor"
                  width="100%"
                  className="game-object"
                  onClick={() => SetChoise("Scissor")}
                />
              </Col>
            </Row>
            <hr />
            {(() => {
              switch (state.winner) {
                case 0:
                  return (
                    <>
                      <p>Your Choise : {state.userChoise}</p>
                      <p>Computer Choise : {state.computerChoise}</p>
                      <h1 className="text-center text-warning">Game Draw!!</h1>
                    </>
                  );
                case 1:
                  return (
                    <>
                      <p>Your Choise : {state.userChoise}</p>
                      <p>Computer Choise : {state.computerChoise}</p>
                      <h1 className="text-center text-success">
                        You Won the game!!
                      </h1>
                    </>
                  );
                case -1:
                  return (
                    <>
                      <p>Your Choise : {state.userChoise}</p>
                      <p>Computer Choise : {state.computerChoise}</p>
                      <h1 className="text-center text-danger">
                        You Lose the game!!
                      </h1>
                    </>
                  );
                default:
                  return (
                    <>
                      <h4 className="">Game Rules:</h4>
                      <p>Rock beats Scissors</p>
                      <p>Scissors beats Paper</p>
                      <p>Paper beats Rock</p>
                      <p className="text-warning">
                        * You are playing against computer
                      </p>
                    </>
                  );
              }
            })()}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RockPaperScissors;
