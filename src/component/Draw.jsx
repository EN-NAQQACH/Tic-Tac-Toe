import React, { useContext, useEffect } from "react";
import { ContextGame } from "../ContextGame/Context";

export default function Draw() {
  const { squares, draw, setDraw, whoIsWinner } = useContext(ContextGame);
  useEffect(() => {
    const a = squares.includes(null);
    if (a === false && whoIsWinner === "") {
      setDraw(true);
    }
  }, [squares, whoIsWinner]);

  return <h1>{draw ? "Draw" : ""}</h1>;
}
