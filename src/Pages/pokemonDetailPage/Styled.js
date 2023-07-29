import styled from "styled-components"
export const DetalheContainer = styled.main`
    background-color: #5d5d5d;
    min-height: 80vh;
    display: flex;
    justify-content: center;
`
export const PokeDetailContainer = styled.div`
    height:80vh;
    width:120vw;
    margin: 29px 10vw;
    display:flex;
    justify-content: space-evenly;
    background-color: ${(props)=>props.corTipo};
    border-radius: 22px;
    position:relative;

`
export const Img = styled.img`
    height: 28vh;
    background-color: #f1f1f1;
    margin-bottom:27px;
    border-radius: 6%;
    
`
export const ImageContainer = styled.div`
    align-self: center;
    height:75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DivContainer = styled.div`
    background:#f1f1f1 ;
    align-self: center;
    height: 75%;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    border-radius: 22px;
`

export const TituloContainer = styled.h2`
    align-self: center;
    display: block;

`
export const TipoMovimentoContainer = styled.div`
    align-self: center;
    height: 75%;
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:12px 12px;
    z-index: 1;
    

`
export const TiposContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color:#ffff;
    font-size: 28px;
    font-family: 'Inter';
    line-height: 23px;
    height:10%;
    h3{
        text-transform:capitalize;
    }
`
export const MovimentoContainer = styled.div`
    background-color: #f1f1f1;
    height: 85%;
    display: flex;
    flex-direction: column;
    border-radius: 11px;
    padding-left:10px;
    margin-top: 74px;
    gap:12px;
    P{
        font-size: 14px;
        background-color: #ECECEC;
        width: 100px;
        max-width: 40%;
        font-family: 'Montserrat';
        font-style: normal;
        height:22px;
        text-align: center;
        display: flex;
        align-items:center;
        border-radius: 12px;
        border: 1px dashed rgba(0,0,0,0.14);
        margin-left:15px;
        padding-left:12px;
    }
    
`;
export const ImgType = styled.img`
    width:100px;
    height:45px;
    margin:4px;

`;
export const PokeImg= styled.img`
    height: 109px;
    position: absolute;
    right:0%;
    top:-20px;
`
export const PokemonBall = styled.img`
    position:absolute;
    width:20px;
    top:0;
    right:0;
    z-index: 0;
`
export const ImgPokeball = styled.img`
    position:absolute;
    width:60%;
    top:0px;
    right: 0px;
`
/// Bar Stats

export const BarraContainer = styled.div`
    height:70% ;
    section{
        display: grid;
        grid-template-columns: 2fr  1fr 3fr;
    }
`   
export const BarraProgresso = styled.div`
    background-color: #ff7c2e;
    width: ${(props)=>props.widthBarra}%;
    height:10px;
    border-radius: 22px;
`

export const PNome = styled.p`
display: flex;
justify-content: end;
`

export const PStatsNumbero = styled.p`
    display: flex;
    justify-content: center;
`

export const BarraDiv = styled.div`
    width:65%;
`