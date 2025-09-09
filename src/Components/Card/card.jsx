import React from "react";
import styles from './card.module.css'    



function Card({Pergunta, Resposta}){

return(


<>

<div className={styles.card}>

<h2>{Pergunta} </h2>
<h2> {Resposta} </h2>


</div>



</>


)

} 

export default Card;