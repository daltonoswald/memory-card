function Difficulty({difficulty, handleDifficultyChange, active }) {

    // let toggleEasy = active ? ' active': null;
    // let toggleMedium = active ? ' active': null;
    // let toggleHard = active ? ' active': null;


    return (
        <>
        <div className='difficulty-settings'>
            <button id="20" className="difficulty-button" onClick={handleDifficultyChange}>Easy</button>
            <button id="60" className="difficulty-button" onClick={handleDifficultyChange}>Medium</button>
            <button id="151" className="difficulty-button" onClick={handleDifficultyChange}>Hard</button>
        </div>
        </>
    )
}

export default Difficulty