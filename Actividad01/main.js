document.addEventListener('DOMContentLoaded', init);

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => Array.from(document.querySelectorAll(selector))

const URL_PERROS = 'https://dog.ceo/api/breeds/image/random'

const URL_GATOS = 'https://api.thecatapi.com/v1/images/search'


function init() {
    setListeners()

    cargarImagenPerros()
    cargarImagenGatos()
}


function setListeners() {
    $('#btn-perros').addEventListener('click', cargarImagenPerros)
    $('#btn-gatos').addEventListener('click', cargarImagenGatos)
}

function cargarImagenPerros() {
    console.log('perros')
    fetch(URL_PERROS)
        .then(response => response.json())
        .then(data => {
            const url = data.message
            $('#img-perros').src = url
        })
}

function cargarImagenGatos() {
    //En lugar de usar fetch de javascript, usaremos axios
    // fetch(URL_GATOS)
    // .then(response => response.json())
    // .then(data => {
    //     const url = data[0].url
    //     $('#img-gatos').src = url
    // })
    axios.get(URL_GATOS)
    .then(response => {
        const url = response.data[0].url
        $('#img-gatos').src = url
    })
}