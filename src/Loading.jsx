import pokeball from '/src/assets/pokeball.png'

export default function Loading() {
    return (
        <>
            <h1 className="loading">Loading...</h1>
            <img className="pokeball-img" src={pokeball} />
        </>
    )
}