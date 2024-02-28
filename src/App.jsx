import { useState, useEffect } from 'react';
import FetchPokemon from './FetchPokemon';

function App() {
    const [clicked, setClicked] = useState([]);
    const [data, setData] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function newGame() {
        setIsGameOver(false);
        setScore(0);
        setClicked([]);
        shuffleData();
    }

    useEffect(() => {
        
        if (new Set(clicked).size !== clicked.length) {
            setIsGameOver(true)
            // Lines 23-31 are temp solutions to fixing scoring
            // setScore((prevScore) => {
            //     const newScore = prevScore -1
            //     checkHighScore(newScore);
            //     return newScore
            // })
            // setHighScore((prevScore) => {
            //     const newHighScore = prevScore -1;
            //     return newHighScore
            // })
          console.log('game over')
      }
    }, [clicked])

    
    function handleScore() {
        if (!isGameOver) {
            setScore((prevScore) => {
                shuffleData();
                const newScore = prevScore + 1
                checkHighScore(newScore);
                if (clicked.length === 20) {
                    setClicked([]);
                }
                return newScore
            })
        }
    }

    function checkHighScore(newScore) {
        if (newScore > highScore) {
            setHighScore(newScore);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      } 

    function shuffleData() {
      setData((prevData) => shuffleArray(prevData));
    }

    function handleClick(e) {
        setClicked([...clicked, e.target.id])
        console.log(clicked);
        handleScore();
        console.log(`High score is`, highScore);
      }

    // if (isGameOver === true) {
    //     return (
    //         <>
    //             <div>Game Over!</div>
    //             <div className="score">Your score is {score}.</div>
    //             <div className="high-score">Your high score is {highScore}</div>
    //             <button className="reset-button" onClick={newGame}>Reset</button>
    //             <FetchPokemon data={data} setData={setData} clicked={clicked} setClicked={setClicked} handleClick={handleClick} shuffleData={shuffleData}/>
    //         </>
    //     )
    // }


    return (
        <>
            <div className="score">
                <div className="current-score">Your score is {score}</div>
                <div className="high-score">Your high score is {highScore}</div>
            </div>
            <FetchPokemon data={data} setData={setData} clicked={clicked} setClicked={setClicked} handleClick={handleClick} shuffleData={shuffleData}/>
            <button className="reset-button" onClick={newGame}>Reset</button>
        </>
    )
}

export default App