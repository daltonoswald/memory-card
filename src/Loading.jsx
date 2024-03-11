import pokeball from '/src/assets/pokeball.png'

export default function Loading() {
    return (
        <>
            <h1 className="loading">Catching Pokemon...</h1>
            <img className="pokeball-img" src={pokeball} />
        </>
    )
}