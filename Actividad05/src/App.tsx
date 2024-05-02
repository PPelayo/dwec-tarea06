import { useEffect, useState } from 'react'
import './App.css'
import { getDogs } from './hooks/DogsApi'
import AnimalCard from './components/AnimalCard'
import { getCats } from './hooks/CatsApi'

function App() {

  const [url, setUrl] = useState<string[]>([])

  useEffect(() => {
    const asyncFunc = async () => {
      const urls = Array<string>()
  
        const dogs = await getDogs(5)
        dogs.message.forEach((dog) => {
          urls.push(dog)
        })

        //Se trae 10 gatos en lugar de 5 por la cara xD. Al parecer el limit de la api no funciona y se queda en 10
        const cats = await getCats(5)
        cats.forEach((cat) => {
          urls.push(cat.url)
        })

        console.log(urls)
        setUrl(urls)
    }

    asyncFunc()
    
  }, [])


  return (
    <>
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 5fr)', 
        gap: '1rem',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '1rem',
        height: '100%',
      }}>
        {
          url.length !== 0 
          ?  url.map((url, index) => 
              <AnimalCard key={index} url={url} />
             ) 
          : <p>Cargando...</p>
        }
      </section>
    </>
  )
}

export default App
