import React, { useContext } from "react";
import { PokedexContainer, } from "./PokedexStyle"
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../Global/GlobalStateContex";
const PokedexPage = () => {
    const {pokedex, removerpokemon} =useContext(GlobalStateContext)
    console.log(pokedex)

    return (
        <PokedexContainer>
            
            {pokedex.map((poke) => {
                return (
                    <PokemonCard poke={poke} removerpokemon={removerpokemon} />
                )

            })}
        </PokedexContainer>
    )
}

export default PokedexPage;