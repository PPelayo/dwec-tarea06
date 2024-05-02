const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=';

async function getCats(n:number) : Promise<Cat[]>  {
    const response = await fetch(`${API_URL}${n}`)
    const data = await response.json()

    return data as Cat[]
}

export { getCats };