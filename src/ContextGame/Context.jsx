import React from 'react'
import { createContext, useState} from "react";
export const ContextGame = createContext();


function ContextGameProvider() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [whoIsWinner, setWhoIsWinner] = useState();
    const [draw, setDraw] = useState(false);
    const [line, setLine] = useState();

  }
  export default ContextGameProvider;