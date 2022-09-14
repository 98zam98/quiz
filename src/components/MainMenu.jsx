import React, { useContext } from 'react'
import {QuizContext}  from "../utils/Contexts.js";

const MainMenu = () => {
    const {Game, setGame} = useContext(QuizContext);
  return (
    <div className='Menu' >
        
        <button
            onClick={()=>setGame(1)}
        >
            start
        </button>
    </div>
  )
}

export default MainMenu