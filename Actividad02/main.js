document.addEventListener('DOMContentLoaded', init);

const URL_GAME_OF_THRONES = 'https://api.gameofthronesquotes.xyz/v1/characters'

const characters = []

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => Array.from(document.querySelectorAll(selector))

function init() {
    loadCharacters()
    setListeners()
}

function setListeners() {
    $('#characters').addEventListener('change', (event) => {
        console.log('evento')
        const character = characters.find(character => character.name === event.target.value)
        console.log(character)

        //Como recibimos un array de quotes, seleccionamos una al azar
        const randomIndex = Math.floor(Math.random() * character.quotes.length)
        $('#quote').textContent = character.quotes[randomIndex]
    })
}

function loadCharacters() {
    fetch(URL_GAME_OF_THRONES)
    .then(response => response.json())
    .then(data => {
        characters.push(...data)
        setCharactersOnSelector(characters)
    })
    .catch(error => console.error(error))
}

function setCharactersOnSelector(characters) {
   characters.forEach(element => {
    console.log(element)
        //Por cada personaje, agregamos un elemento option al selector
        const option = document.createElement('option')
        option.value = element.name
        option.text = element.name
        $('#characters').appendChild(option)
   }) 
}