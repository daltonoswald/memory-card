/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Loading from './Loading';


function FetchPokemon({ data, setData, handleClick, difficulty}) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://pokeapi.co/api/v2/pokemon/`

    let pokemonCount = 20;
    if (difficulty === 'Easy') {
        pokemonCount = 20
    } else if (difficulty === 'Medium') {
        pokemonCount = 60
    } else if (difficulty === 'Hard') {
        pokemonCount = 151
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
            const pokeList = [];
            for (let i = 1; i <= pokemonCount; i++) {
            const response = await fetch(`${url}${i}`)
            if (!response.ok) {
              throw new Error(`Failed to fetch ${response.status}`)
            }
            const result = await response.json()
            pokeList.push(result);
        }
          setData(pokeList)
          setIsLoading(false);
          console.log(pokeList)
        } catch (error) {
          setError(error.message)
        }
      }
      fetchData()

    }, [url, setData, pokemonCount, difficulty])

    if (error) return <p>Error: {error}</p>
    if (!data) return <Loading />
    if (isLoading) return <Loading />
    
  return (
        <div className="pokemon-cards">
          {data.map(data => 
          <>
            <div key={data.name} id={data.name} onClick={handleClick} className="card">
                <img id={data.name} src={data.sprites.front_default} alt={data.name} />
            </div>
        </>
          )
          }
        </div>
      );
  }

export default FetchPokemon