import React, { useContext } from "react";


import { ContextGame } from "../ContextGame/Context";

function Winner(){
    const {whoIsWinner, setWhoIsWinner} = useContext(ContextGame);
    return(
            <h2>{whoIsWinner ? `Winner is :${whoIsWinner}`: ""}</h2>
    )
}
export default Winner;