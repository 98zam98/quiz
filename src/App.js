import {useState,useEffect} from 'react';
import { MainMenu,EndScreen,Quiz } from './components';
import {QuizContext}  from "./utils/Contexts.js";
/*
MainMenu 0
Quiz 1
EndScreen 2
 */
const App = () =>{
    const [Game, setGame] = useState(0);
    const [Score, setScore] = useState(0);
    return(
        <div className='App'>
            <QuizContext.Provider
            value={{
                Game, setGame, Score, setScore
            }}
            >
                {Game===0&&<MainMenu/>}
                {Game===1&&<Quiz/>}
                {Game===2&&<EndScreen/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App ;
