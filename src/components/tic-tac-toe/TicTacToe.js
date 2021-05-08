import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../../styles/TicTacToe.css";
function TicTacToe() {
  const [state, setState] = useState({
    currentUser: "X",
    matrix: ["", "", "", "", "", "", "", "", ""],
    gameState: "continue",
    winner: null,
  });
  function setSymbolAt(index) {
    if (state.gameState === "pause") {
      return;
    }
    let changedUser = state.currentUser === "X" ? "O" : "X";
    let array = [...state.matrix];
    if (array[index] !== "") {
      return;
    }
    array[index] = state.currentUser;
    // console.log(array);

    let winner = checkForWinner(array);
    // console.log(winner);
    if (winner) {
      setState({
        currentUser: state.currentUser,
        matrix: [...array],
        gameState: "pause",
        winner: winner,
      });
    } else {
      setState({
        currentUser: changedUser,
        matrix: array,
        gameState: "continue",
        winner: null,
      });
    }
  }
  function checkForWinner(array) {
    if (array[0] === array[1] && array[0] === array[2] && array[0] !== "") {
      return state.currentUser;
    } else if (
      array[3] === array[4] &&
      array[3] === array[5] &&
      array[3] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[6] === array[7] &&
      array[6] === array[8] &&
      array[6] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[0] === array[3] &&
      array[0] === array[6] &&
      array[0] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[1] === array[4] &&
      array[1] === array[7] &&
      array[1] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[2] === array[5] &&
      array[2] === array[8] &&
      array[2] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[0] === array[4] &&
      array[0] === array[8] &&
      array[0] !== ""
    ) {
      return state.currentUser;
    } else if (
      array[2] === array[4] &&
      array[2] === array[6] &&
      array[2] !== ""
    ) {
      return state.currentUser;
    } else {
      let found = false;
      array.forEach(checkEmpty);
      function checkEmpty(item, index) {
        if (item === "") {
          found = true;
        }
      }
      if (!found) {
        return "Draw";
      }
    }
  }
  function resetTheGame() {
    setState({
      currentUser: "X",
      matrix: ["", "", "", "", "", "", "", "", ""],
      gameState: "continue",
      winner: null,
    });
  }
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <h1 className="text-center pt-3">Let's Start</h1>
            <hr />
            <div className="d-flex justify-content-between my-0">
              <p>Player 1 : X</p>
              <p>
                Turn : <big>{state.currentUser}</big>
              </p>
              <p>Player 2 : O</p>
            </div>
            <hr />
            <div className="tic-tac-toe-container">
              <div className="game-grid">
                <div className="game-cell" onClick={() => setSymbolAt(0)}>
                  {state.matrix[0]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(1)}>
                  {state.matrix[1]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(2)}>
                  {state.matrix[2]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(3)}>
                  {state.matrix[3]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(4)}>
                  {state.matrix[4]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(5)}>
                  {state.matrix[5]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(6)}>
                  {state.matrix[6]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(7)}>
                  {state.matrix[7]}
                </div>
                <div className="game-cell" onClick={() => setSymbolAt(8)}>
                  {state.matrix[8]}
                </div>
              </div>
            </div>
            <hr />
            <h1 className="text-center text-success">
              {state.winner === "X"
                ? "Player 1 is the winner!!!"
                : state.winner === "O"
                ? "Player 2 is the winner!!!"
                : state.winner === "Draw"
                ? "Match Draw!!!"
                : null}
            </h1>
            <div className="d-flex justify-content-center">
              <Button onClick={() => resetTheGame()}>Restart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TicTacToe;
