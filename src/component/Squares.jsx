import React, { useContext } from "react";

import { ContextGame } from "../ContextGame/Context"; 

export default function Square({ value, index }) {
  const { squares, setSquares, isXNext, setIsXNext, whoIsWinner, line } = useContext(ContextGame);

  function handleClick() {
    if (whoIsWinner) return; // we check if there is an winner
    if (squares[index]) return; // we check if an specific square are filled
    const newSquares = [...squares]; // if there is an empty square we create a new one
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button type="button" onClick={handleClick}> {value} </button>
  );
}
