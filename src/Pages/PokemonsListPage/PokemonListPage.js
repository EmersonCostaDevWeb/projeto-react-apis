import React, { useContext, useEffect, useState } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokeListContainer, Titulo, SecaoLista } from "./Styled";
import { PegaPokemons } from "../../Api/request";
import { GlobalStateContext } from "../../Global/GlobalStateContex";

const PokemonListPage = () => {
    const [pokemon, setPokemon] = useState([])
    const { pokedex, setPokedex, adicionarPokemon } = useContext(GlobalStateContext)
    useEffect(() => {
        PegaPokemons(setPokemon)
    }, [])
    const PokemonsCapturada = pokemon.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))
    // console.log("pokemon")
    // console.log(PokemonsCapturada)
    // console.log(pokedex)
    return (
        <PokeListContainer>
            <Titulo>Todos Pokémons</Titulo>
            <SecaoLista>
                {PokemonsCapturada.map((poke) => {
                    return (
                        <PokemonCard key={poke.id}
                            poke={poke}
                            pokedex={pokedex}
                            setPokedex={setPokedex}
                            adicionarPokemon={adicionarPokemon}
                        />
                    )
                })}
            </SecaoLista>
        </PokeListContainer>
    )
}
export default PokemonListPage;