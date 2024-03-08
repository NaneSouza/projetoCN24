import React from "react"
import Header from "./Components/Header/Header.jsx"
// import Main from "./Components/Main/Main.jsx"
// import Footer from "./Components/Footer/Footer.jsx"
import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  
  }
  `
  

 /* header{
background-color: #EDD820;
height:30vh;
width:98.6vw;


} 



.daHeader{
display: flex;
align-items: center;
justify-content: center;
height:30vh;
width:98.6vw;


}



.logo {
  margin-left: 2rem;

}


.navheader0{
height: 30vh;
width: 30vw;
display: flex;
align-items: center;
margin-left: 35rem;
justify-content: center;
cursor: pointer;

}

.imgjogprog1{
height: 65%;
width: 70%;

}

.imgjogprog2{
height: 70%;
width: 60%;

}

.navheader1{
height: 28vh;
width: 10vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}

.navheader2{
height: 28vh;
width: 15vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}


  .nameicons {
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
 } 


 .daMain1{
display: flex;
align-items: center;
justify-content: center;
height:50vh;
width:98.6vw;
background-color: #211921;
cursor: pointer;

}

.imgcima{
height: 37vh;
width: 29vw;


}

.daMain2{
display: flex;
align-items: center;
justify-content: center;
height:50vh;
width:98.6vw;
background-color: #EDD820;
cursor: pointer;

}

.imgbaixo{
height: 37vh;
width: 29vw;

}

 
  
 .doFooter1{
display: flex;
align-items: center;
justify-content: space-around;
height:20vh;
width:98.6vw;
background-color: #211921;


}

.imgfooterWB{
width: 98%;
height: 70%;
margin-left: 3rem;
}



ul{
 display: flex;
 align-items: center;
 justify-content: space-evenly; 
 flex-direction: row;
 list-style-type: none;
 cursor: pointer;
}


.Listafooter{
  color: white;
  font-family: Roboto;
  font-size: 1.6rem;
  height: 80%;
  width: 80%;
  padding-top: 1.8rem;
  padding-left: 5rem;


}

.imgfooter2{
cursor: pointer;
padding-left: 2rem;

}


.imggit{
  height: 90%;
  width: 90%;
  margin-left: 2rem;


}

.imglinkedin{
  height: 80%;
  width: 70%;
  margin-right: 4rem;

}

.doFooter2{
display: flex;
align-items: center;
justify-content: center;
height:15vh;
width:98.6vw;
background-color: #EDD820;
}

h3{
  color: white;
  font-family: Roboto;
  font-weight: lighter;
  font-size: 1.5rem;
}
  */


function App(){
  return(
    <>
    <GlobalStyle />
    <Header/>   
   
    </>
  )
}

export default App
