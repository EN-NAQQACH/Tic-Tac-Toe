import React, { useContext, useEffect, useState } from "react";
import { ContextGame } from "../ContextGame/Context";
import "../App.css";

import Square from "../component/Squares";
import Winner from "../component/Winner";
import Draw from "../component/Draw";
import Winnercalcul from "./winnercalcul";

export default function Board() {
  const { squares, setWhoIsWinner, whoIsWinner, draw, setDraw } =
    useContext(ContextGame);

  useEffect(() => {
    const win = Winnercalcul(squares);
    if (win) {
      setWhoIsWinner(win[0]);
    }
  }, [squares]);

  return (
    <div className="board-container">
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
      {whoIsWinner ? <Winner /> : ""}
      {draw ? <Draw /> : ""}
    </div>
  );
}
