function Shiny({ shiny, handleShinyChange }) {

    return (
        <>
        <div className='shiny-settings'>
            <button className={"shiny-button " + (shiny ? 'active' : '')} onClick={handleShinyChange}>Shiny</button>
        </div>
        </>
    )
}

export default Shiny