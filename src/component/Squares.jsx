import React, { useContext, useEffect, useState } from "react";

import {ContextGame} from '../ContextGame/Context'

function Squares({value, index}){
  const [squares, setSquares, isXNext, setIsXNext] = useContext(ContextGame)

  function handlebutton(){
    if(squares[index]) return;
    const newsquare = [...squares]
    newsquare[index] = isXNext ? "X" : "O"
    setSquares(newsquare);
    setIsXNext(!isXNext);
  }

  return (
    <div>
        <button onClick={handlebutton}>
         {value}
        </button>
    </div>

  )
}
export default Squares;
