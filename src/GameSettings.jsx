import Difficulty from "./Difficulty"

function GameSettings({difficulty, handleDifficultyChange, newGame}) {
    return (
        <div className="game-settings">
            <Difficulty difficulty={difficulty} handleDifficultyChange={handleDifficultyChange}/>
            <button className="reset-button" onClick={newGame}>Reset</button>
        </div>
    )
}

export default GameSettings