import React from "react"
import * as S from "../Header/EstiloDaHeader.jsx"
import Logo from "./imgHeader/CN.png"
import Game from "./imgHeader/Game.png"
import Time from "./imgHeader/Time.png"

function Header(){
    return(
      <S.EstiloDaHeader>

  <S.ImgLogo src={Logo} alt="logo escrito Cartoon Network" />


      <S.Section>

      <S.Div>
      <S.ImgJogo src={Game} alt="imagem de um joystick" />
      <S.H2>JOGOS</S.H2>
      </S.Div>

      <S.Div>
      <S.ImgProg src={Time} alt="imagem de um relógio" />
      <S.H2>PROGRAMAÇÃO</S.H2>
      </S.Div>
      </S.Section>

      </S.EstiloDaHeader>
        )
        
    }

  
  
  export default Header
