import React, { useContext, useState } from 'react';
import {QuizContext}  from "../utils/Contexts";
import {Qbank}  from "../utils/Qbank";



const EndScreen = () => {
  const {Game, setGame , Score, setScore} = useContext(QuizContext);
  const restart = ()=>{
    setGame(0);
    setScore(0);
  };
  return (
    <div className='EndScreen' >
      
      <h1>done</h1>
      <h3>score</h3>
      <h3>{ Score }/{ Qbank.length }</h3>
      <button
      onClick={restart}
      >
      restart
      </button>
    </div>
  )
}

export default EndScreen
