import React, {useState} from "react"
import * as S from "../Programação/EstiloDaProgramacao.jsx"
import Adventure from "../Programação/ImgProgramação/adventure-time.png"
import Apple from "../Programação/ImgProgramação/apple-and-onion.png"
import Ben10 from "../Programação/ImgProgramação/ben-10.png"
import Clarence from "../Programação/ImgProgramação/clarence.png"
import Craig from "../Programação/ImgProgramação/craig-of-the-creek.png"
import Gumball from "../Programação/ImgProgramação/gumball.png"
import Jorels from "../Programação/ImgProgramação/jorels-brother.png"
import Looney from "../Programação/ImgProgramação/looney-tunes-cartoon.png"
import NewLooney from "../Programação/ImgProgramação/new-looney-tunes.png"
import RegularShow from "../Programação/ImgProgramação/regular-show.png"
import Scooby from "../Programação/ImgProgramação/scooby-doo.png"
import Steven from "../Programação/ImgProgramação/steven-universe.png"
import Titans from "../Programação/ImgProgramação/teen-titans.png"
import Meninas from "../Programação/ImgProgramação/the-power.png"
import TomJerry from "../Programação/ImgProgramação/tom-jerry.png"
import ToonTu from "../Programação/ImgProgramação/toontubers.png"
import Villan from "../Programação/ImgProgramação/villainous.png"
import Babybears from "../Programação/ImgProgramação/we-baby-bears.png"
import Barebears from "../Programação/ImgProgramação/we-bare-bears.png"


export default function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { nome: "Hora da Aventura", hora: "5:00h", imagem: Adventure, manha:true, tarde:false, noite:false },
        { nome: "Maçã e Cebola", hora: "6:00h", imagem: Apple, manha:true, tarde:false, noite:false },
        { nome: "Ursinhos em Curso", hora: "7:00h", imagem: Babybears, manha:true, tarde:false, noite:false }, 
        { nome: "Ursinhos sem Curso", hora: "8:00h", imagem: Barebears, manha:true, tarde:false, noite:false },
        { nome: "Ben 10", hora: "09:00h", imagem: Ben10, manha:true, tarde:false, noite:false },
        { nome: "Clarêncio, o Otimista", hora: "10:00h", imagem: Clarence, manha:true, tarde:false, noite:false },
        { nome: "O Mundo de Greg ", hora: "11:00h", imagem: Craig, manha:true, tarde:false, noite:false },
        { nome: "O Incrível Mundo de Gumball", hora: "12:00h", imagem: Gumball, manha:false, tarde:true, noite:false }, 
        { nome: "Irmão do Jorel", hora: "13:00h", imagem: Jorels, manha:false, tarde:true, noite:false },
        { nome: "Looney Tunes", hora: "14:00h", imagem: Looney, manha:false, tarde:true, noite:false },
        { nome: "Meninas Super Poderosas", hora: "15:00h", imagem: Meninas, manha:false, tarde:true, noite:false },
        { nome: "Looney Tunes Cartoons", hora: "16:00h", imagem: NewLooney, manha:false, tarde:true, noite:false},
        { nome: "Apenas um show", hora: "17:00h", imagem: RegularShow, manha:false, tarde:true, noite:false}, 
        { nome: "Scooby-Doo e Convidados", hora: "18:00h", imagem: Scooby, manha:false, tarde:false, noite:true },
        { nome: "Steven Universo", hora: "19:00h", imagem: Steven, manha:false, tarde:false, noite:true },
        { nome: "Os Jovens Titãs em Ação", hora: "20:00h", imagem: Titans, manha:false, tarde:false, noite:true },
        { nome: "Tom e Jerry", hora: "21:00h", imagem: TomJerry, manha:false, tarde:false, noite:true },
        { nome: "Toon Tubers", hora: "22:00h", imagem: ToonTu, manha:false, tarde:false, noite:true }, 
        { nome: "Vilanesco ", hora: "23:00h", imagem: Villan, manha:false, tarde:false, noite:true },
       
    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.manha === true)

    const desenhoDepoisMeioDia = desenhos.filter((item) => item.tarde === true)

    const desenhoDepoisNoite = desenhos.filter((item) => item.noite === true)

    return (

<>
        <S.Section>

            <S.H1>PROGRAMAÇÃO DOS DESENHOS</S.H1>

            {desenhos.map((item) => (
                <S.Card>
                    
                    <S.H3> {item.hora} </S.H3>
                    <S.H2> {item.nome} </S.H2>
                    <S.Img src={item.imagem} alt={item.nome} />
                </S.Card>

            ))}

          
            
            

        </S.Section>

        <S.SectionDesManha>
            <S.TituloH2>DESENHOS DA MANHÃ</S.TituloH2>

            {desenhoAntesMeioDia.map((item) => (

<S.DivManha>   
<S.HoraManha> {item.hora} </S.HoraManha>
<S.NomeManha> {item.nome} </S.NomeManha>

</S.DivManha>


            ))}

        </S.SectionDesManha>

        <S.SectionDesTarde>
            <S.TituloH2>DESENHOS DA TARDE</S.TituloH2>

            {desenhoDepoisMeioDia.map((item) => (

<S.DivTarde>   
<S.HoraTarde> {item.hora} </S.HoraTarde>
<S.NomeTarde> {item.nome} </S.NomeTarde>

</S.DivTarde>


            ))}

        </S.SectionDesTarde>


        <S.SectionDesNoite>
            <S.TituloH2>DESENHOS DA NOITE</S.TituloH2>

            {desenhoDepoisNoite.map((item) => (

<S.DivNoite>   
<S.HoraNoite> {item.hora} </S.HoraNoite>
<S.NomeNoite> {item.nome} </S.NomeNoite>

</S.DivNoite>


            ))}

            

        </S.SectionDesNoite>
        

        </>
    )
}
































