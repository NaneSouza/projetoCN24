import React, {useState} from "react"
import * as S from "../Main/EstiloDaMain.jsx"
import Programacao from "../Programação/Programacao.jsx"
import Scooby from "../Main/imgMain/Scooby.png"
import Ben10 from "../Main/imgMain/Ben10.png"
import Looney from "../Main/imgMain/Looney.png"
import Gumball from "../Main/imgMain/Gumball.png"
import Meninas from "../Main/imgMain/Meninas.png"
import TomEJerry from "../Main/imgMain/TomEJerry.png"

function Main(){

    

    const [galeria2, setgaleria2] = useState
    ([Gumball,
    Meninas,
    TomEJerry
    ]) 

    return(

        <main>
       
       <S.Section1>

<S.Img src={Scooby} alt="Scooby" />
<S.Img src={Ben10} alt="Scooby" />
<S.Img src={Looney} alt="Scooby" />


       </S.Section1>
      
        <S.Section2>

        {galeria2.map ((item)=>(
<S.Img src={item} alt="item"/>

           ) )}


       </S.Section2>

       <Programacao/>
    

      </main>
        )
  }
  
  export default Main