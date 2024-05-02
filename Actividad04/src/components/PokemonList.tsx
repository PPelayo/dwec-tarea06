/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { PokemonResult } from "../types/PokemonResult"
import { Pokemon } from "../types/pokemon"
import PokemonCard from "./PokemonCard"

interface Props {
    offset: number,
    limit: number,
    isLoading : boolean,
    setIsLoading : (isLoading: boolean) => void
}

function PokemonList(props: Props) {
    
    // const [pokemonResult, setPokemonResult] = useState<PokemonResult | null>(null)
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])


    useEffect(() => {
        //Verificamos que no se este cargando para evitar estados innecesarios
        if(props.isLoading) return
        props.setIsLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${props.offset}&limit=${props.limit}`)
            .then(response => response.json())
            .then((results : PokemonResult) => {
                //Hacemos la consulta y guardamos las promesas
            const promises = results.results.map(result => 
                fetch(result.url)
                    .then(response => response.json())
                )
                //Esperamos a que todas las promesas se resuelvan
                Promise.all(promises)
                    .then(pokemons => {
                        //Copaimos la lista original para agregar nuevos items
                        const originalPokemonList = [...pokemonList]
                        //Agregamos los nuevos items
                        originalPokemonList.push(...pokemons)
                        //Actualizamos el estado
                        setPokemonList(originalPokemonList)
                    })
                    .finally(() => {
                        //Marcamos que ya no estamos cargando
                        props.setIsLoading(false)
                    })
            })

    }, [props.offset, props.limit])

    // useEffect(() => {
    //     // if(props.isLoading) return
    //     //Verificamos que no sea null
    //     if (pokemonResult) {
            
    //     }
    // }, [pokemonResult])

    return (
        <>
            <section style={{
                display: 'flex',
                maxWidth: '850px',
                flexWrap: 'wrap',
                gap: '1rem',
                flex: '1'
            }}>
                {pokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
            </section>
        </>
    )
}

export default PokemonList