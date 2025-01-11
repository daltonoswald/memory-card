import pokeball from '/src/assets/pokeball.png'

export default function Loading() {
    return (
        <div className='loading-container'>
            <h1 className="loading">Catching Pokemon...</h1>
            <img className="pokeball-img" src={pokeball} />
        </div>
    )
}