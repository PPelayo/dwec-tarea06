import { Pokemon } from "../types/pokemon"

interface Props {
    pokemon : Pokemon
}

function PokemonCard(props: Props) {
    
    return (
        <>
        <article style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '300px',
            border: '1px solid black',
            borderRadius: '12px',
            backgroundColor: '#f2f2f2',
            overflow: 'hidden',
        }}>
            <div style={{ 
                width: '100%',
                overflow: 'hidden',
                flex: '1',
            }}>
                <img style={{
                    width: '100%',
                    height: '100%',
                }}
                src={props.pokemon.sprites.other.dream_world.front_default} 
                alt={props.pokemon.name}
                loading="lazy"
                />
            </div>

            <h3 style={{
                backgroundColor: '#4a4a4a',
                width: '100%',
                margin: 0,
                color: 'white',
                padding: '10px'
            }}>
                {props.pokemon.name}
            </h3>
        </article>
        </>
    )
}

export default PokemonCard