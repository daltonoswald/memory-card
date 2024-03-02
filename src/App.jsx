import { useState, useEffect } from 'react';
import FetchPokemon from './FetchPokemon';
import Difficulty from './Difficulty'
import Loading from './Loading';

function App() {
    const [clicked, setClicked] = useState([]);
    const [data, setData] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [activeDifficulty, setActiveDifficulty] = useState(false);

    function newGame() {
        setIsGameOver(false);
        setScore(0);
        setClicked([]);
        shuffleData();
    }

    function handleDifficultyChange(e) {
        const newDifficulty = e.target.textContent;
        setDifficulty(newDifficulty);
        newGame();
    }

    function handleGameOver() {
        setIsGameOver(true);
        newGame();
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
        if (clicked.includes(e.target.id)) {
            handleGameOver();
            setClicked([]);
            setScore((prevScore) => {
                const newScore = prevScore;
                checkHighScore(newScore);
                return newScore
            })
        } else {
            setScore((prevScore) => {
                shuffleData();
                const newScore = prevScore + 1;
                checkHighScore(newScore);
                return newScore
            })
        }
      }


    return (
        <>
                <div className="heading">
                    <div className="current-score">Your score is {score}</div>
                    <Difficulty difficulty={difficulty} handleDifficultyChange={handleDifficultyChange} />
                    <div className="high-score">Your high score is {highScore}</div>
                </div>
            <FetchPokemon   data={data} 
                            setData={setData}
                            clicked={clicked} 
                            setClicked={setClicked} 
                            handleClick={handleClick} 
                            shuffleData={shuffleData} 
                            difficulty={difficulty}
                            />
            <button className="reset-button" onClick={newGame}>Reset</button>
        </>
    )
}

export default App