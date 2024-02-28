/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Loading from './Loading';


function FetchPokemon({ data, setData, handleClick}) {
    const [error, setError] = useState(null);
    const url = `https://pokeapi.co/api/v2/pokemon/`
    // const url2 = 'https://pokeapi.co/api/v2/pokemon?limit=151'

    // useEffect(() => {
    //   function fetchKantoPokemon(){
    //     fetch(`${url2}`)
    //     .then(response => response.json())
    //     .then(allpokemon => {
    //       const pokeList = [];
    //       pokeList.push(allpokemon.results);
    //       setData(allpokemon.results);
    //       console.log(pokeList)
    //       console.log(pokeList[0][15])
    //       console.log(pokeList[0].url)
    //     })
    //   }
    //   fetchKantoPokemon()
    // }, [url2, setData])


    useEffect(() => {
      const fetchData = async () => {
        try {
            const pokeList = [];
            for (let i = 1; i <= 20; i++) {
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

    }, [url, setData])
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
          } //
        </div>
      );
  }

export default FetchPokemon