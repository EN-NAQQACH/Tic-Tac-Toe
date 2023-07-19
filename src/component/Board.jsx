import React, { useContext, useEffect, useState } from "react";

import { ContextGame } from "../ContextGame/Context";

import '../App.css'
import Square from "../component/Squares";

export default function Board() {
  const { squares, setWhoIsWinner, setLine, whoIsWinner } =
    useContext(ContextGame);
  const [isOver, setIsOver] = useState(false);



  return (
    <div className="board-container">
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
    </div>
  );
}