import axios from "axios"
export const PegaPokemons = (setData) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((resp) => {
            const pokeResults = resp.data.results
            const newRequest = pokeResults.map((poke) => axios.get(poke.url))
            Promise.all(newRequest).then((resp) => {
                const pokeData = resp.map((pokemon) => pokemon.data)
                setData(pokeData)
            }).catch((err) => {
                console.log(err)
            })
        })
}


export const NomeDoPokemon = (nome, setData) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
}