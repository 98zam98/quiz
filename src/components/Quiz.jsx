import React, { useContext, useState } from 'react';
//import {QuizContext}  from "../utils/Contexts.js";
import {Qbank}  from "../utils/Qbank";
import {QuizContext}  from "../utils/Contexts";

const Quiz = () => {
  const {Game, setGame , Score, setScore} = useContext(QuizContext);
  const [Quetion, setQuetion] = useState(0);
  const [Option, setOption] = useState(2);
  const nextQ=()=>{
    //console.log( 'called' );
    if(Option===Qbank[Quetion].answer)
    {
      setScore(Score+1);
    }
    setQuetion((Quetion+1)%(Qbank.length));
  };
  const finishQ=()=>{
    //console.log( 'called' );
    if(Option===Qbank[Quetion].answer)
    {
      setScore(Score+1);
    }
    //setQuetion((Quetion+1)%(Qbank.length));
    setGame(2);
  };
  return (
    <div className='Quiz' >
      <h1>{Qbank[Quetion].prompt}</h1>
      <div className='options' >
        <button onClick={()=>setOption(0)} > {Qbank[Quetion].options[0]} </button>
        <button onClick={()=>setOption(1)} > {Qbank[Quetion].options[1]} </button>
      </div>
      {
        Quetion===(Qbank.length-1)?
        (<button onClick={finishQ}>finish</button>)
        :
        (<button onClick={nextQ}>next</button>)
      }
      
      
    </div>
  )
}

export default Quiz