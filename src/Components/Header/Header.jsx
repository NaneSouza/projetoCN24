import React from "react"
import Logo from "./imgHeader/CN.png"
import Game from "./imgHeader/Game.png"
import Time from "./imgHeader/Time.png"

function Header(){
    return(
      <header>

      <section className="daHeader">

        <div>
      <img className="logo" src={Logo} alt="logo escrito Cartoon Network" />
       </div>
<div className="navheader0" >
<nav className="navheader1">
      <img className="imgjogprog1" src={Game} alt="imagem de um joystick" />
      <h2 className="nameicons">JOGOS</h2>
</nav>
     
<nav className="navheader2">
      <img className="imgjogprog2" src={Time} alt="imagem de um relógio" />
      <h2 className="nameicons">PROGRAMAÇÃO</h2>
</nav>
</div>
      </section>

      </header>
        )
        
    }

  
  
  export default Header
