import styled from "styled-components"



export const Section = styled.section`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: #211921;
 
`


export const H1 = styled.h1`

height: 29vh;
font-size: 1.85rem;
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 4.05rem;
margin-top: 1rem;


`


export const Card = styled.div`
height: 30vh;
width: 45vw;
border: solid 1rem #211921;
background-color: #EDD820;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
`


export const Img = styled.img`
height: 20vh;
width: 14vw;
box-shadow: 0 0 2rem rgba(33, 25, 33, 0.5);

&:hover{
    transform: scale(1.2);
}

`

export const H2 = styled.h2`
font-size: 1rem;

`

export const H3 = styled.h3`
font-size: 1rem;
`


export const TituloH2 = styled.h2`
font-size: 1rem;
background-color: white;

        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 2s steps(13) infinite alternate,
          blink 800ms steps(13) infinite normal;
        border-right: 0.5rem solid black;
      
      @keyframes typewriter {
        from {
          width: 0%;
        }
        to {
          width: 20%;
        }
      }
      @keyframes blink {
        from {
          border-color: black;
        }
        to {
          border-color: transparent;
        }
    }
 
`



export const SectionDesManha = styled.section`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: #edd820;
border: solid 1rem #211921;
`


export const DivManha = styled.div`
display: flex;
justify-content: center;
box-shadow: 0 0 2rem rgba(33, 25, 33, 0.5);
width: 20vw;
margin: 0.5rem;


&:hover{
    transform: scale(1.1);
}

`

export const HoraManha = styled.h3`
font-size: 1rem;
padding-right: 0.6rem;

`

export const NomeManha = styled.h3`
font-size: 1rem;

`



export const SectionDesTarde = styled.section`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: rgb(237, 216, 32);
border: solid 1rem #211921;

`


export const DivTarde = styled.div`
display: flex;
justify-content: center;
box-shadow: 0 0 2rem rgba(33, 25, 33, 0.5);
width: 20vw;
margin: 0.5rem;

&:hover{
    transform: scale(1.1);
}

`

export const HoraTarde = styled.h3`
font-size: 1rem;
padding-right: 0.6rem;

`

export const NomeTarde = styled.h3`
font-size: 1rem;;

`




export const SectionDesNoite = styled.section`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: rgb(237, 216, 32);
border: solid 1rem #211921;

`


export const DivNoite = styled.div`
display: flex;
justify-content: center;
box-shadow: 0 0 2rem rgba(33, 25, 33, 0.5);

width: 20vw;
margin: 0.5rem;

&:hover{
    transform: scale(1.1);
        
}

`

export const HoraNoite = styled.h3`
font-size: 1rem;;
padding-right: 0.6rem;

`

export const NomeNoite = styled.h3`
font-size: 1rem;;

`