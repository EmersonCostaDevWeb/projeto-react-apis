import react, { useContext } from "react"
import { HeaderContainer, RightHeaderButton, ImgLogo } from "./Style"
import { LeftHeaderButton } from "./Style"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { gotoPokedexPage, gotoPokemonListPage } from "../../Router/coordinator";
import { NomeDoPokemon } from "../../Api/request";
import { GlobalStateContext } from "../../Global/GlobalStateContex";
import pokedexlogo from "../../imagens/pokedex.png"
const Header = () => {
    // console.log(pokedex)
    // console.log(setPokedex);
    // console.log(removerpokemon);
    let titlepage;
    let leftButtonText;
    let nextpage;
    const { pathname } = useLocation()
    // console.log(pathname);
    const navigate = useNavigate()
    const NomePoke = pathname.split("/")[2]
    const { pokedex, setPokedex, removerpokemon } = useContext(GlobalStateContext)
    const PokemonNoPoke = pokedex.find((poke) => poke.name === NomePoke)



    if (pathname === "/") {
        titlepage = "Todos os Pokemons";
        leftButtonText = "Todos os Pokémons";
        nextpage = () => gotoPokedexPage(navigate)
    } else if (pathname === "/pokedex/") {
        titlepage = "Pokedex";
        leftButtonText = "Lista de Pokemons";
        nextpage = () => gotoPokemonListPage(navigate);
    } else if (pathname.includes("/detalhes/")) {
        /* titlepage = pathname.split("/")[2] */
        leftButtonText = "Voltar";
        nextpage = () => gotoPokemonListPage(navigate)
    }
    const adicionarPokedex = (nome) => {
        NomeDoPokemon(nome, (setData) => {
            setPokedex([...pokedex, setData])
        })
    }
    return (
        <HeaderContainer>
            {pathname === "/pokedex/" || pathname.includes("/detalhes") ? (
                <LeftHeaderButton onClick={() => nextpage()}>{leftButtonText}</LeftHeaderButton>
            ) : (
                <RightHeaderButton onClick={() => nextpage()}>Pokedex</RightHeaderButton>
                )}
          
            <ImgLogo src={pokedexlogo} />
            {(pathname.includes("/detalhes/")) &&
                (PokemonNoPoke ?
                    (<RightHeaderButton red onClick={() => removerpokemon(NomePoke)}>Remover da Pokedex</RightHeaderButton>
                    ) : (
                     <RightHeaderButton onClick={() => adicionarPokedex(NomePoke)}>Adicionar na Pokedex</RightHeaderButton>
                    )
                )
            }
        </HeaderContainer>
    )
}
export default Header