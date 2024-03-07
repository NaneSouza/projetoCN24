import React from "react"
import IMG1 from "../Main/imgMain/img1.png"
import IMG2 from "../Main/imgMain/img2.png"
import IMG3 from "../Main/imgMain/img3.png"
import IMG4 from "../Main/imgMain/img4.png"
import IMG5 from "../Main/imgMain/img5.png"
import IMG6 from "../Main/imgMain/img6.png"

function Main(){
    return(
      <main>
        <section className="daMain1">

       <nav>
       <div className="imgcoluna1.1">
       <img className="imgcima" src={IMG1} alt="Turma do Scooby Doo" />
       </div>
       </nav>

       <nav>
       <div className="imgcoluna2.1">
       <img className="imgcima" src={IMG2} alt="Turma do Ben 10" />
       </div>
       </nav>

       <nav>
       <div className="imgcoluna3.1">
       <img className="imgcima" src={IMG3} alt="Turma do Looney Tunes" />
       </div>
       </nav>

       </section>

       <section className="daMain2">

       <nav>
       <div className="imgcoluna1.2">
       <img className="imgbaixo" src={IMG4} alt="Turma do O Incrivel Mundo de Gumball" />
       </div>
       </nav>

       <nav>
       <div className="imgcoluna2.2">
       <img className="imgbaixo" src={IMG5} alt="As Meninas Super Poderosas" />
       </div>
       </nav>

       <nav>
       <div className="imgcoluna3.2">
       <img className="imgbaixo" src={IMG6} alt="Turma do Tom e Jerry" />
       </div>
       </nav>

       </section>

      </main>
        )
  }
  
  export default Main