import React from 'react'
import { createContext, useState} from "react";
export const ContextGame = createContext();


function ContextGameProvider({children}) {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [whoIsWinner, setWhoIsWinner] = useState();
    const [draw, setDraw] = useState(false);
    const [line, setLine] = useState();
    const state = {
      squares,
      setSquares,
      isXNext,
      setIsXNext,
      whoIsWinner,
      setWhoIsWinner,
      draw,
      setDraw,
      line,
      setLine,
    };
  
    return <ContextGame.Provider value={state}>{children}</ContextGame.Provider>;

  }
  export default ContextGameProvider;