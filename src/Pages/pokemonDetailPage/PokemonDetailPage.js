import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    PokeDetailContainer,
    Img,
    ImageContainer,
    DivContainer,
    TituloContainer,
    TipoMovimentoContainer,
    TiposContainer,
    MovimentoContainer,
    ImgType,
    PokeImg,
    BarraContainer,
    ImgPokeball,
    BarraProgresso,
    PNome,
    PStatsNumbero,
    BarraDiv,
    DetalheContainer
} from "./Styled"
import { NomeDoPokemon } from "../../Api/request"
import { retornaBackground } from "../../utils/retornaBackground"
import { retornaType } from "../../utils/retornaType"
import pokemonbola from "../../imagens/pokeball.png"
const PokemonDetailPage = () => {
    const [pokemon, setPokemon] = useState({})
    const { nome } = useParams()
    // console.log(nome)
    // console.log(pokemon) 
    let pokemonId;
    let pokemonNome;
    let pokemonTipo;
    if ("types" in pokemon) {
        pokemonTipo = retornaBackground(pokemon.types[0].type.name)
        pokemonId = pokemon.id.toString().length === 1 ? `0${pokemon.id}` : pokemon.id;
        /* pokemonNome = pokemon.name[0].toUpperCase() + pokemon.name.substring(1); */
    }
    useEffect(() => {
        NomeDoPokemon(nome, setPokemon)
    }, [])
    console.log(nome)
    console.log(pokemon)
    return (
        <DetalheContainer>
            <PokeDetailContainer corTipo={pokemonTipo}>
                <ImageContainer>
                    <Img src={pokemon.sprites?.front_default} alt="" />
                    <Img src={pokemon.sprites?.back_default} alt="" />
                </ImageContainer>
                <DivContainer>
                    <TituloContainer>Base Stats</TituloContainer>
                    <BarraContainer>
                        {pokemon.stats?.map((pokes, index) => {
                            // console.log(pokes)
                            return (
                                <section>
                                    <PNome key={index}>
                                        <b>{pokes.stat.name}:</b>
                                    </PNome>
                                    <PStatsNumbero>{pokes.base_stat}</PStatsNumbero>
                                    <BarraDiv>
                                        <BarraProgresso widthBarra={pokes.base_stat}></BarraProgresso>

                                    </BarraDiv>
                                </section>
                            )
                        })}
                    </BarraContainer>
                </DivContainer>
                <ImgPokeball src={pokemonbola} alt="" />
                <PokeImg src={pokemon.sprites?.other["official-artwork"].front_default}
                    alt={`imagem do Pokemon ${pokemon?.name}`} />
                <TipoMovimentoContainer>
                    <TiposContainer>
                        <p>#{pokemonId}</p>
                        <h3>{pokemon.name}</h3>
                        <div>
                            {pokemon.types?.map((pokes, index) => {
                                // console.log(pokes.type.name)
                                return (
                                    <ImgType key={index} src={retornaType(pokes.type.name)} />
                                )
                            })}
                        </div>
                    </TiposContainer>

                    <MovimentoContainer>
                        <TituloContainer>Movimento</TituloContainer>
                        {pokemon.moves?.map((pokes, itens) => {
                            // console.log(pokes.move.name)
                            return (
                                itens < 6 && <p><b>{pokes.move.name}</b></p>
                            )
                        })}
                    </MovimentoContainer>
                </TipoMovimentoContainer>
            </PokeDetailContainer>
        </DetalheContainer>
    )
}
export default PokemonDetailPage