import styled from "styled-components"

export const PokeCardContainer = styled.div`
    background-color:${props=>props.type};
    height: 210px;
    width: 440px;
    margin: 22px;
    border-radius: 22px;
    color:#ffff;
    position:relative;

`;
export const PokeInformacao = styled.section`
    display: flex;
    flex-direction: column;
    height:60%;
    margin: 25px 0 0 25px;
    h3{
        font-size: 18px;
        text-transform: capitalize;
    }
    
`
export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgType = styled.img`
    width:100px;
    height:19;
    margin:4px;
    display:flex;
`
export const PokeImg= styled.img`
    height: 109px;
    position: absolute;
    right:0%;
    top:-20px;
`
export const ImgPokeball = styled.img`
    position:absolute;
    width:145px;
    top:0px;
    right: 0px;
`
export const DivConcainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 2%;
`
export const BotaoCaputa = styled.button`
    background-color: #ffff;
    width: 150px;
    height: 38px;
    margin-right: 21px;
    border-radius: 8px;
    cursor:pointer;
    border: none;
    z-index: 1;
    font-size: 22px;
    font-family: 'Courier New';
    color:black;
`
 
export const BotaoRomover = styled.button`
    background-color: #ffff;
    width: 150px;
    height: 38px;
    margin-right: 21px;
    border-radius: 8px;
    cursor:pointer;
    border: none;
    color:black;
    font-size:22px;
    font-family: 'Franklin Gothic Medium';
    
`
export const BotaoDetalhe = styled.h3`
    color:#ffff;
    text-decoration: underline;
    margin-left:22px;
    cursor:pointer;
    font-size:19px;
    font-family: 'Courier New';
`
 