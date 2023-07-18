import React, { useState, useContext } from "react";
import Squares from "./Squares";
import ContextGameProvider, { ContextGame } from "../ContextGame/Context";

function Board() {
  const [squares] = useContext(ContextGame)
  return (
      <div>
        {squares.map((value, index) => (
          <Squares value={value} index={index} />
        ))}
      </div>
  );
}
export default Board;
