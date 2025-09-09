import React from "react";
import styles from './main.module.css'
import Card from "../Components/Card/card";
import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'




function Main ({}){

return(

<>
<Header/>

<div className={styles.main}>
    
    
<Card Pergunta="Explique com suas palavras o que é um componente React." 
 Resposta="Um componente React é uma parte reutilizável da interface de uma aplicação"/>

<Card Pergunta="Qual a função de um arquivo app.jsx no react?"
 Resposta="Ele funciona como componente pai que recebe os outro componentes"/>

<Card Pergunta="Descreva a função do arquivo main.jsx."
 Resposta="Ele importa o App.jsx e o renderiza dentro da página HTML usando a função ReactDOM.createRoot."/>

<Card Pergunta="O ciclo de vida do componente React são divididos em tres fazes"
 Resposta="Montagem, atualização e desmontagem"/>
 </div>


<Footer/>
</>


)


}
export default Main