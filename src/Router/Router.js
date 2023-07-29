import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/pokemonDetailPage/PokemonDetailPage"
import Header from "../components/Header/Header"
export default function Router() {
    /* const [pokedex, setPokedex] = useState([])
    console.log(pokedex)
    const adicionarPokemon = (pokemon) => {
        setPokedex([...pokedex, pokemon])
    }
    console.log(pokedex)
    const removerpokemon = (pokenome) => {
        setPokedex(pokedex.filter((poke) => poke.name !== pokenome))
    } */
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<PokemonListPage/>} />
                    <Route path="/pokedex/" element={<PokedexPage/>} />
                    <Route path="/detalhes/:nome" element={<PokemonDetailPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
