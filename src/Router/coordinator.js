export const gotoPokemonListPage=(navigate)=>{
    navigate("/")
}

export const gotoPokedexPage = (navigate)=>{
    navigate("/pokedex/")
}

export const gotoDetailPage=(navigate,name) =>{
    navigate(`/detalhes/${name}`)
}