import styled from "styled-components";

export const HeaderContainer = styled.header`
    font-family: 'Courier New';
    font-size: 22px;
    display: flex;
    min-height: 100px;
    max-height:300px;
    background-color: #f1f1f2;
    align-items: center;
    justify-content: center;
    position:relative;
`
export const LeftHeaderButton = styled.button`
    position: absolute;
    left:10px;
    padding:5px;
    border-radius:12px;
    width: 120px;
    cursor:pointer;
`
export const RightHeaderButton = styled.button`
    position: absolute;
    border-radius:12px;
    cursor:pointer;
    background-color: ${(props) => (props.red ? "#FF6262" : "#33A4F5")};
    padding:4px 10px;
    width: 287px;
    height:57px;
    right:10px;
    top:10px;
    color:#ffff;
    align-items: center;
    position:absolute;
    font-size:22px;

`
export const ImgLogo = styled.img` 
    width:300px;
    height:100px;    
`