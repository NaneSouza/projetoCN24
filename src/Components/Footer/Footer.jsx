import React, {useState} from "react"
import * as S from "../Footer/EstiloDoFooter.jsx"
import WB from "../Footer/imgFooter/WB.png"
import Git from "../Footer/imgFooter/Git.png"
import Linkedin from "../Footer/imgFooter/Linkedin.png"

function Footer(){
    return(
      <footer>
       
       <S.Section1>
        <div>
      <img src={WB} alt="Logo da Warner Bros" />
       </div>

       <div>
      
      <S.Ul>
        <li>Sobre nós</li>
        <li>Produtos</li>
        <li>Personagens</li>
      </S.Ul>
     
      </div>

      <S.DivSocial>
     <img src={Git} alt="logo do GitHub" />
    
     <img src={Linkedin} alt="Logo do LinkedIn" />
    
     </S.DivSocial>
     
       </S.Section1>

       <S.Section2>

      <h3>© 2024 Cartoon Network</h3>

        
       </S.Section2>

    




      </footer>
        )
  }
  
  export default Footer