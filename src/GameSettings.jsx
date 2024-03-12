import Difficulty from "./Difficulty"

function GameSettings({difficulty, handleDifficultyChange, newGame, active}) {
    return (
        <div className="game-settings">
            <Difficulty difficulty={difficulty} handleDifficultyChange={handleDifficultyChange} active={active}/>
            <button className="reset-button" onClick={newGame}>Reset</button>
        </div>
    )
}

export default GameSettings