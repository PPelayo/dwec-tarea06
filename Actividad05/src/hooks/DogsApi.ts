const URL_PERROS = 'https://dog.ceo/api/breeds/image/random'

async function getDogs(n : number) : Promise<Dog> {
    // fetch(`${URL_PERROS}/${n}`)
    //     .then(response => response.json())
    //     .then(data => {
            
    //     })

    const response = await fetch(`${URL_PERROS}/${n}`)
    const data = await response.json()
    return data as Dog
}

export { getDogs };