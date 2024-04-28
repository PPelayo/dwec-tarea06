document.addEventListener('DOMContentLoaded', init)

//No hardcodear en el cliente.
//En node estaria bien agregarlo en un fichero .env
const API_KEY = '3c1cedbad399c2c106ca5ffd2034fc1e'
const API_URL = 'https://ws.detectlanguage.com/0.2/detect'


const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => Array.from(document.querySelectorAll(selector))

const languajes = new Map()

async function init() {
    await loadLanguajesList()
    setListeners()   
}


function setListeners() {
    $('#form').addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        fetchData(data.text)
    })
}

function fetchData(text) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text
        })
    })
    .then(res => res.json())
    .then(data => {
        //Limpiamos la detection anterior antes de mostrar la nueva
        $('#result').innerHTML = ''

        //La respuesta nos devuelve un array con los posibles idiomas
        console.log(data)
        data.data.detections.forEach(idioma => {
            const languaje = languajes.get(idioma.language)
            $('#result').innerHTML += `<li>${languaje}</li>`
        })
    })
    .catch(err => console.error(err))
}


/**
 * Carga en memoria una lista de lenguajes.
 * Se hace de esta forma por que el cors del servidor me bloquea la peticion
 */
async function loadLanguajesList() {
    //Como evitar el cors para este servidor
    const res = await fetch('languajes.json')
    const data = await res.json()
    data.forEach(languaje => {
        languajes.set(languaje.code, languaje.name)
    })
}