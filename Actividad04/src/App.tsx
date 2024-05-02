/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import PokemonWithInfiniteScroll from './components/PokemonWithInfiniteScroll'
import PokemonWithLoadButton from './components/PokemonWithLoadButton'

function App() {

  return (
    <>
        {/* <PokemonWithLoadButton/> */}
        <PokemonWithInfiniteScroll/>
    </>
  )
}

export default App
