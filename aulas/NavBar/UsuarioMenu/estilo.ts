import { Link } from "react-router-dom"
import styled from "styled-components"

interface UsuarioMenu {
  aberto: boolean
}

export const UsuarioMenuContainer = styled.div<UsuarioMenu>`
position: absolute;
right: 0;
background-color: #ffffff;
box-shadow: -2px 2px 5px;
margin-top: 440px;
padding: 24px 30px 26px 30px;
border-radius: 10px;
font-size: 16px;
display: ${({aberto}) => aberto ? "block" : "none"};
`

export const UsuarioMenuLink = styled(Link)`
display: block;
padding: 5px;
color: #212529;
text-decoration: none;
background-color: transparent;
font-size: 16px;
`