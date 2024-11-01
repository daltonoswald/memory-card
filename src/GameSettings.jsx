import Difficulty from "./Difficulty"
import Shiny from "./Shiny"

function GameSettings({difficulty, handleDifficultyChange, shiny, handleShinyChange, newGame }) {
    return (
        <div className="game-settings">
            <Difficulty difficulty={difficulty} handleDifficultyChange={handleDifficultyChange}/>
            <div className="game-settings-bottom">
                <Shiny shiny={shiny} handleShinyChange={handleShinyChange} />
                <button className="reset-button" onClick={newGame}>Reset</button>
            </div>
        </div>
    )
}

export default GameSettings