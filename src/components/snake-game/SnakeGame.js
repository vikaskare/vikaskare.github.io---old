import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import {
  FaArrowLeft,
  FaArrowUp,
  FaArrowRight,
  FaArrowDown,
  FaUndo,
} from "react-icons/fa";
import "../../styles/SnakeGame.css";
function SnakeGame() {
  const gridSize = 18;
  const speed = 5;

  const [board, setBoard] = useState(Array(gridSize * gridSize).fill(0));
  const [snake, setSnake] = useState([20, 2]);
  const [score, setScore] = useState(0);
  const [updateValue, setUpdateValue] = useState(null);
  const [gameStatus, setGameStatus] = useState("start");
  const [food, setFood] = useState(
    Math.floor(Math.random() * (gridSize * gridSize)) + 1
  );
  const updateSnake = () => {
    if (updateValue !== null && gameStatus === "start") {
      snake.pop();
      snake.unshift(snake[0] + updateValue);
      setSnake([...snake]);
      console.log(snake);
    }
  };
  const checkFoodAte = () => {
    if (snake[0] === food) {
      snake.unshift(food);
      setSnake([...snake]);
      setFood(Math.floor(Math.random() * (gridSize * gridSize)) + 1);
    }
  };
  const gameOver = () => {
    setUpdateValue(null);
    setGameStatus("over");
    setSnake([20, 2]);
  };

  const gameStart = () => {
    setUpdateValue(1);
    setGameStatus("start");
    setSnake([20, 2]);
  };
  const checkForCollide = () => {
    if (snake[0] < 0 || snake[0] > gridSize * gridSize) {
      gameOver();
    }
  };

  const handleKeyDown = (event) => {
    if (gameStatus !== "start") {
      setGameStatus("start");
    }
    // left key
    if (event.keyCode === 37 || event.keyCode === 65) {
      setUpdateValue(-1);
    }
    // up key
    else if (event.keyCode === 38 || event.keyCode === 87) {
      setUpdateValue(-18);
    }
    // right key
    else if (event.keyCode === 39 || event.keyCode === 68) {
      setUpdateValue(1);
    }
    // down key
    else if (event.keyCode === 40 || event.keyCode === 83) {
      setUpdateValue(18);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const update = setInterval(() => {
      updateSnake();
      checkFoodAte();
      checkForCollide();
    }, 1000 / speed);
    // clearing interval
    return () => clearInterval(update);
  });

  return (
    <>
      <h1 className="text-center pt-3">Let's Play</h1>
      <hr />
      <Container>
        <Row className="w-100">
          <Col md={12} lg={8} className="mb-3">
            <div className="snake-game-container">
              <div className="snake-game-grid">
                {board.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        (snake.includes(index) ? "snake-body" : "") +
                        " " +
                        (food === index ? "snake-food" : "") +
                        " " +
                        "snake-game-cell"
                      }
                    ></div>
                  );
                })}
              </div>
              <h1 className="text-warning pt-3">
                {gameStatus === "over" && "Game Over !! "}
              </h1>
              <div className="d-flex justify-content-between m-3">
                <Button
                  className="m-1"
                  onClick={() => {
                    setUpdateValue(-1);
                    setGameStatus("start");
                  }}
                >
                  <FaArrowLeft />{" "}
                </Button>
                <Button
                  className="m-1"
                  onClick={() => {
                    setUpdateValue(-gridSize);
                    setGameStatus("start");
                  }}
                >
                  <FaArrowUp />
                </Button>
                <Button
                  className="m-1"
                  onClick={() => {
                    setUpdateValue(gridSize);
                    setGameStatus("start");
                  }}
                >
                  <FaArrowDown />
                </Button>
                <Button
                  className="m-1"
                  onClick={() => {
                    setUpdateValue(1);
                    setGameStatus("start");
                  }}
                >
                  <FaArrowRight />
                </Button>

                <Button
                  variant={"warning"}
                  className="m-1"
                  onClick={() => {
                    setSnake([20, 2]);
                    setFood(
                      Math.floor(Math.random() * (gridSize * gridSize)) + 1
                    );
                    gameStart();
                  }}
                >
                  <FaUndo />
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4} className="pl-5">
            <h5>
              Score : <span className="text-success">{snake.length - 2}</span>
            </h5>
            <h6>Instructions:</h6>
            <p className="text-success">- Press any control key to start.</p>
            <p className="text-warning">
              - You can use keyboard arrows (⬆ ⬅ ➡ ⬇) or{" "}
              <span className="text-success">WADS</span> reapectively to control
              snake.
            </p>
            <p className="text-warning">
              - Hitting top wall or bottom wall will cause snake to die.
            </p>
            <p className="text-success">
              - Left and Right walls are magic walls that will not cause snake
              to die.
              <span className="text-warning"> Except corners.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SnakeGame;
