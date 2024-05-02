/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"

function PokemonWithInfiniteScroll() {

    const [offset, setOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const handleIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight + 10; // Se le suma 10 para que cargue antes de llegar al final

            // Verifica si se ha llegado al final de la página
            if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
                setOffset(offset + 10);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset, isLoading]);
    

    return(
        <>
            <div style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
                gap: '2rem',
            }}>
                <PokemonList offset={offset} limit={10} isLoading={isLoading} setIsLoading={handleIsLoading} />
                
                {isLoading && <p>Cargando...</p>}
            </div>
        </>
    )
}

export default PokemonWithInfiniteScroll