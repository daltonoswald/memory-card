import { useState, useEffect } from 'react';
import FetchPokemon from './FetchPokemon';
import Difficulty from './Difficulty'
import GameSettings from './GameSettings';
import Loading from './Loading';

function App() {
    const [clicked, setClicked] = useState([]);
    const [data, setData] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    //Work on isGameWin
    const [isGameWin, setIsGameWin] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState('Click each Pokemon once without repeating!');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [activeDifficulty, setActiveDifficulty] = useState(false);

    function newGame() {
        setMessage('Click each Pokemon once without repeating!')
        setIsGameOver(false);
        setDisabled(false);
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
        setMessage('Game over! Please reset or try a different difficulty.')
        setDisabled(true);
    }

    function handleGameWin() {
        let cardCount = 4;
        if (score === cardCount) {
        setIsGameOver(true);
        setMessage('You win! Play again or try a different difficulty.');
        setDisabled(true)
        }
        else {
            return
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
        if (!disabled) {
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
            // handleGameWin();
            setScore((prevScore) => {
                shuffleData();
                const newScore = prevScore + 1;
                checkHighScore(newScore);
                return newScore
            })
        }
      } else {
        return
      }
    }


    return (
        <>
                <div className="heading">
                    <div className="scores">
                        <div className="current-score">Your score is {score}</div>
                        <div className="high-score">Your high score is {highScore}</div>
                    </div>
                    <GameSettings difficulty={difficulty} handleDifficultyChange={handleDifficultyChange} newGame={newGame} />
                    <div className="message">{message}</div>
                </div>
            <FetchPokemon   data={data} 
                            setData={setData}
                            disabled={disabled}
                            setDisabled={setDisabled}
                            clicked={clicked} 
                            setClicked={setClicked} 
                            handleClick={handleClick} 
                            shuffleData={shuffleData} 
                            difficulty={difficulty}
                            />
        </>
    )
}

export default App