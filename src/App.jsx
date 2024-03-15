import React from "react"
import Header from "./Components/Header/Header.jsx"
import Main from "./Components/Main/Main.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  cursor: url('data:image/x-icon;base64,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AP8AAAD/AAAAOwAAAB8AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9lmf//f6r//3+q//9/qv//AAAA/wAAAP8AAAD/f6r//3+q////////AAAA/wAAAFUAAAA5AAAAHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAA/2WZ//9/qv//f6r//3+q//9/qv//f6r//3+q//9/qv//f6r///////8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAGAAAABQAAAAMAAAD/ZZn//wAAAP9/qv//f6r//3+q//9/qv//f6r//wAAAP9/qv///////wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAoAAAAMAAAADAAAABUAAAASAAAACQAAAP9lmf//f6r//3+q//9/qv//f6r//3+q//9/qv//f6r//3+q////////AAAA/wAAAFQAAAA4AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAFQAAAB8AAAAeAAAALAAAACIAAAAQAAAA/+Xl5f9/qv//f6r//3+q//9/qv//f6r//3+q//9/qv////////////8AAAD/AAAAUQAAADUAAAAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAAAjAAAANQAAADMAAAA6AAAAJwAAABAAAAD/5eXl/////////////////////////////////////////////////wAAAP8AAABFAAAALAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAGwAAAC4AAAD/AAAA/wAAADkAAAAgAAAACwAAAP/l5eX//////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/+Xl5f//////AAAA/wAAAC8AAAAcAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAZAAAA/wAAAP8AAAD/AAAAMgAAABkAAAAJAAAA/+Xl5f/l5eX/AAAA/wAAABUAAAAMAAAAAwAAAAEAAAD/5eXl/+Xl5f8AAAD/AAAAFQAAAAwAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAADEAAAAoAAAAFgAAAAoAAAAAAAAA/wAAAP8AAAAGAAAABgAAAAMAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAYAAAAGAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAAcAAAAGgAAABcAAAAOAAAABwAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAABwAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////jx///48f//+PH///jx///48f//+PH///jx///w8P//4AB//+AAf//gAD//4AAf/+AAH//gAB//4AAf/+AAH//wAB//8AA///AAf//wAP//8AD///AA///wAP//8AD///AA//ZwAP/0cPD/8Pn5//H////wf///8='), auto;
  
  }
  `
  

function App(){
  return(
    <>
    <GlobalStyle />
    <Header/>   
    <Main/>
    <Footer/>
   
    </>
  )
}

export default App
