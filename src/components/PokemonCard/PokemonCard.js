import React from "react";
import {
    BotaoCaputa,
    BotaoRomover,
    BotaoDetalhe,
    DivConcainer,
    ImgContainer,
    PokeCardContainer,
    PokeImg,
    PokeInformacao,
    ImgType,
    ImgPokeball
} from "./Styled";

import { useLocation, useNavigate } from "react-router-dom";
import { gotoDetailPage } from "../../Router/coordinator";
import { retornaType } from "../../utils/retornaType";
import { retornaBackground } from "../../utils/retornaBackground";
import pokeball from "../../imagens/pokeball.png"
const PokemonCard = ({ poke, pokedex, setPokedex, adicionarPokemon, removerpokemon }) => {
    const { pathname } = useLocation()

    //  console.log(poke.name);
    const navigate = useNavigate()
    console.log(poke)
    return (
        <PokeCardContainer type={retornaBackground(poke.types[0].type.name)}>
            <PokeInformacao>
                <p>#{poke.id.toString().length===1? `0${poke.id}`: poke.id}</p>
                <h3>{poke.name}</h3>
                <div>{poke.types.map((type, index) => {
                    return <ImgType key={index} src={retornaType(type.type.name)} />
                })}</div>
            </PokeInformacao>
            <ImgContainer>
            <ImgPokeball  src={pokeball} alt=""/>
                <PokeImg src={poke.sprites.other["official-artwork"].front_default} alt={`imagem do pokemon ${poke.name}`} />
            </ImgContainer>
            <DivConcainer>
                <BotaoDetalhe onClick={() => gotoDetailPage(navigate, poke.name)}>Detalhes</BotaoDetalhe>
                {pathname === "/" ? (
                    <BotaoCaputa onClick={() => adicionarPokemon(poke)}>Capturar!</BotaoCaputa>) :
                    (<BotaoRomover onClick={() => removerpokemon(poke.name)}>Remover</BotaoRomover>)
                }

            </DivConcainer>
        </PokeCardContainer>
    )

}
export default PokemonCard;