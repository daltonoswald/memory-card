function Difficulty({difficulty, handleDifficultyChange}) {
    return (
        <>
        <div className='difficulty-settings'>
            <button id="easy" className="difficulty-button" onClick={handleDifficultyChange}>Easy</button>
            <button id="medium" className="difficulty-button" onClick={handleDifficultyChange}>Medium</button>
            <button id="hard" className="difficulty-button" onClick={handleDifficultyChange}>Hard</button>
        </div>
        </>
    )
}

export default Difficulty