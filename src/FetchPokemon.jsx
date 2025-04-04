/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Loading from './Loading';
import Error from './Error'


function FetchPokemon({ data, setData, handleClick, difficulty, disabled, isGameOver, isGameWin, shiny }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://pokeapi.co/api/v2/pokemon/`

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
            const pokeList = [];
            for (let i = 1; i <= difficulty; i++) {
              const response = await fetch(`${url}${i}`)
              if (response.ok) {
                const result = await response.json()
                pokeList.push(result);              
              } else {
                // throw new Error(`Failed to fetch ${response.status}`)
                // console.log(response)
                continue
              }
            }
              setData(pokeList)
            } catch (error) {
              setError(error.message)
              setData(null);
              throw new Error(`Failed to fetch ${response.status}`)
            } finally {
              setIsLoading(false)
            }
          }
          fetchData()

    }, [url, difficulty])

    // if (error) return <p>Error: {error}</p>
    if (error) return <Error error={error}/>
    if (!data || isLoading) return <Loading />

    let checkGameOver = isGameOver ? ' gameOver': null;
    let checkGameWin = isGameWin ? ' gameWin': null;
    
  return (
        <div className="pokemon-cards">
          {data.map(data => 
            <div key={data.name} 
              id={data.name}
              onClick={handleClick} 
              disabled={disabled} 
              className={"card " + (checkGameOver ? 'gameOver' : '') + (checkGameWin ? 'gameWin' : '')}
              >
              {(shiny) && (
                <img id={data.name} src={data.sprites.front_shiny} alt={data.name} />
              )}
              {(!shiny) && (
                <img id={data.name} src={data.sprites.front_default} alt={data.name} />
              )}
            </div>
          )
          }
        </div>
      );
  }

export default FetchPokemon