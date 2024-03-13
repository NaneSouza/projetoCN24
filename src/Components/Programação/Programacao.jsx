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
        { nome: "Hora da Aventura", hora: "6:00h", imagem: Adventure },
        { nome: "Maçã e Cebola", hora: "7:00h", imagem: Apple },
        { nome: "Ursinhos em Curso", hora: "8:00h", imagem: Babybears }, 
        { nome: "Ursinhos sem Curso", hora: "9:00h", imagem: Barebears },
        { nome: "Ben 10", hora: "10:00h", imagem: Ben10 },
        { nome: "Clarêncio, o Otimista", hora: "10:00h", imagem: Clarence },
        { nome: "O Mundo de Greg ", hora: "11:00h", imagem: Craig },
        { nome: "O Incrível Mundo de Gumball", hora: "12:00h", imagem: Gumball }, 
        { nome: "Irmão do Jorel", hora: "13:00h", imagem: Jorels },
        { nome: "Looney Tunes", hora: "14:00h", imagem: Looney },
        { nome: "Meninas Super Poderosas", hora: "15:00h", imagem: Meninas },
        { nome: "Looney Tunes Cartoons", hora: "16:00h", imagem: NewLooney},
        { nome: "Apenas um show", hora: "17:00h", imagem: RegularShow}, 
        { nome: "Scooby-Doo e Convidados", hora: "18:00h", imagem: Scooby },
        { nome: "Steven Universo", hora: "19:00h", imagem: Steven },
        { nome: "Os Jovens Titãs em Ação", hora: "20:00h", imagem: Titans },
        { nome: "Tom e Jerry", hora: "21:00h", imagem: TomJerry },
        { nome: "Toon Tubers", hora: "22:00h", imagem: ToonTu }, 
        { nome: "Vilanesco ", hora: "23:00h", imagem: Villan },
       
    ])

    
    return (
        <section>
            <S.H1>PROGRAMAÇÃO DOS DESENHOS</S.H1>

            {desenhos.map((item) => (
                <S.Card>
                    
                    <S.H3> {item.hora} </S.H3>
                    <S.H2> {item.nome} </S.H2>
                    <S.Img src={item.imagem} alt={item.nome} />
                </S.Card>

            ))}

        </section>
    )
}
































