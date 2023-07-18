import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./component/Board";
import ContextGameProvider, { ContextGame } from "./ContextGame/Context";

function App() {
  const [
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
  ] = useContext(ContextGame);

  return (
    <div className="appdiv">
      <p>hi</p>
      <ContextGame.Provider value={{squares, setSquares, isXNext,setIsXNext,whoIsWinner,setWhoIsWinner, draw,setDraw,line,setLine,}}>
       <Board />
      </ContextGame.Provider>
    </div>
  );
}

export default App;
