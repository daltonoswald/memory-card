import { useEffect, useState } from "react"

function Difficulty({difficulty, handleDifficultyChange }) {

    return (
        <>
        <div className='difficulty-settings'>
            <button id="20" className={"difficulty-button " + (difficulty === '20' ? 'active' : 'inactive')} onClick={handleDifficultyChange}>Easy</button>
            <button id="60" className={"difficulty-button " + (difficulty === '60' ? 'active' : 'inactive')} onClick={handleDifficultyChange}>Medium</button>
            <button id="151" className={"difficulty-button " + (difficulty === '151' ? 'active' : 'inactive')} onClick={handleDifficultyChange}>Hard</button>
        </div>
        </>
    )
}

export default Difficulty