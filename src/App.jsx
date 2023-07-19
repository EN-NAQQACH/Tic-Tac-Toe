import { useState } from "react";

import "./App.css";
import Board from "./component/Board";
import GameContextProvider, { ContextGame } from "./ContextGame/Context";



function App() {
  return (
    
    <GameContextProvider>
      <Board />
    </GameContextProvider>
      
    
  );
}

export default App;
