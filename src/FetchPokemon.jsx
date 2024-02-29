/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Loading from './Loading';


function FetchPokemon({ data, setData, handleClick, difficulty}) {
    const [error, setError] = useState(null);
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
          console.log(pokeList)
        } catch (error) {
          setError(error.message)
        }
      }
      fetchData()

    }, [url, setData, pokemonCount])


    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //         const pokeList = [];
    //         for (let i = 1; i <= 20; i++) {
    //         const response = await fetch(`${url}${i}`)
    //         if (!response.ok) {
    //           throw new Error(`Failed to fetch ${response.status}`)
    //         }
    //         const result = await response.json()
    //         pokeList.push(result);
    //     }
    //     for (let i = 20; i <= 40; i++) {
    //       const response = await fetch(`${url}${i}`)
    //       if (!response.ok) {
    //         throw new Error(`Failed to fetch ${response.status}`)
    //       }
    //       const result = await response.json()
    //       pokeList.push(result);
    //   }
    //       setData(pokeList)
    //       console.log(pokeList)
    //     } catch (error) {
    //       setError(error.message)
    //     }
    //   }
    //   fetchData()

    // }, [url, setData])

    if (error) return <p>Error: {error}</p>
    if (!data) return <Loading />
    
  return (
        <div className="pokemon-cards">
          {data.map(data => 
          <>
            <div id={data.name} onClick={handleClick} className="card">
                <img id={data.name} src={data.sprites.front_default} />
                {/* <div id={data.name}>{data.name}</div> */}
            </div>
        </>
          )
          }
        </div>
      );
  }

export default FetchPokemon