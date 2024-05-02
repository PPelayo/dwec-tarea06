import { useState } from "react"
import PokemonList from "./PokemonList"

function PokemonWithLoadButton() {
    
    const [offset, setOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const handleIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading)
    }

    return (
        <>
            <div style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
                gap: '2rem',

            }}>
                <PokemonList offset={offset} limit={10} isLoading={isLoading} setIsLoading={handleIsLoading} />

                <button 
                    disabled={isLoading}
                    onClick={() => setOffset(offset + 10)}
                >
                    {isLoading ? 'Cargando...' : 'Cargar más'} 
                </button>
            </div>
        </>
    )
}

export default PokemonWithLoadButton